/* ============================================================
   service-worker.js  —  Offline PWA engine
   Veterinary Biochemistry Studio
   ------------------------------------------------------------
   Strategy:
     - Navigation requests (HTML): Cache-first with background
       refresh, with robust fallback to cached app shell when offline.
     - Static assets (CSS, JS, data files, icons): Cache-first with
       background update so the app launches instantaneously offline.
     - Dynamic assets & images: Stored on demand in image cache.

   IMPORTANT: bump CACHE_VERSION whenever precached files change.
   ============================================================ */

var CACHE_VERSION = "vbioc-v6";
var SHELL_CACHE = CACHE_VERSION + "-shell";
var IMG_CACHE = CACHE_VERSION + "-img";

var PRECACHE = [
  "./",
  "index.html",
  "manifest.json",

  // App Icons
  "images/icon-192.png",
  "images/icon-512.png",
  "images/icon-maskable-512.png",
  "images/apple-touch-icon.png",
  "images/favicon-32x32.png",
  "images/icon.svg",

  // Stylesheets
  "assets/css/tokens.css",
  "assets/css/main.css",
  "assets/css/sections.css",
  "assets/css/deep-guide.css",
  "assets/css/events.css",
  "assets/css/animations.css",

  // Data & Syllabus
  "data/data-syllabus.JS",
  "data/data-theory-unit1.JS",
  "data/data-theory-unit2.JS",
  "data/data-theory-unit3.JS",
  "data/data-practical.JS",
  "data/data-why.JS",
  "data/data-qa.JS",
  "data/data-quiz.JS",
  "data/events-data.js",

  // Application Logic
  "js/store.js",
  "js/quiz.js",
  "js/dashboard.js",
  "js/glossary.js",
  "js/search.js",
  "js/deep-guide.js",
  "js/events.js",
  "js/app.js"
];

// Normalize request matching for root vs index.html
function matchPrecache(req) {
  return caches.match(req).then(function (hit) {
    if (hit) return hit;
    var url = new URL(req.url);
    if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html")) {
      return caches.match("index.html").then(function (c) {
        return c || caches.match("./");
      });
    }
    return null;
  });
}

// Install event — precache all critical shell assets
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(SHELL_CACHE)
      .then(function (cache) {
        return Promise.all(
          PRECACHE.map(function (url) {
            return fetch(new Request(url, { cache: "reload" }))
              .then(function (response) {
                if (response && response.ok) {
                  return cache.put(url, response);
                }
              })
              .catch(function () {
                // If an individual asset fails, continue caching others
              });
          })
        );
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

// Activate event — clean up any outdated caches
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (k) {
          if (k.indexOf(CACHE_VERSION) !== 0) {
            return caches.delete(k);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// Fetch event — offline-first with background revalidation
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);

  // Never intercept cross-origin / third-party requests
  if (url.origin !== location.origin) return;

  // 1. Navigation requests (Opening the site / refreshing in browser / PWA launch)
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(function (networkRes) {
          if (networkRes && networkRes.ok) {
            var copy = networkRes.clone();
            caches.open(SHELL_CACHE).then(function (cache) {
              cache.put(req, copy);
            });
          }
          return networkRes;
        })
        .catch(function () {
          // Offline fallback — return cached index.html or shell root
          return matchPrecache(req).then(function (cached) {
            return cached || caches.match("index.html") || caches.match("./");
          });
        })
    );
    return;
  }

  // 2. Images — Cache first, fetch and store on demand
  if (/\.(png|jpg|jpeg|webp|gif|svg|ico)$/i.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(function (hit) {
        if (hit) return hit;
        return caches.open(IMG_CACHE).then(function (imgCache) {
          return imgCache.match(req).then(function (imgHit) {
            if (imgHit) return imgHit;
            return fetch(req).then(function (res) {
              if (res && res.ok) {
                imgCache.put(req, res.clone());
              }
              return res;
            }).catch(function () {
              return null;
            });
          });
        });
      })
    );
    return;
  }

  // 3. Static shell resources (CSS, JS, data files, manifest)
  // Cache-first for lightning instant offline loading, revalidate in background
  e.respondWith(
    caches.match(req).then(function (cachedRes) {
      var fetchPromise = fetch(req).then(function (netRes) {
        if (netRes && netRes.ok) {
          var copy = netRes.clone();
          caches.open(SHELL_CACHE).then(function (cache) {
            cache.put(req, copy);
          });
        }
        return netRes;
      }).catch(function () {
        return cachedRes;
      });

      return cachedRes || fetchPromise;
    })
  );
});

// Listen for message events (e.g. from in-app update trigger)
self.addEventListener("message", function (e) {
  if (e.data && e.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
