/* ============================================================
   service-worker.js  —  Offline PWA engine
   Veterinary Biochemistry Studio
   Network first, with a precached app shell for offline use.
   ============================================================ */

var BUILD_HASH = "492ccf1338d5b5f6ae57ab3b4e83d7505afa9912527ec0a005c1eeb5306a2d48";
var APP_SCOPE = self.registration.scope;
var CACHE_PREFIX = "vbioc:" + new URL(APP_SCOPE).pathname + ":";
var SHELL_CACHE = CACHE_PREFIX + BUILD_HASH;
var SHELL_URLS = [new URL("./", APP_SCOPE), new URL("index.html", APP_SCOPE)];

var PRECACHE = [
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
  "assets/css/simulations.css",

  // Data & Syllabus
  "data/data-syllabus.JS",
  "data/data-theory-unit1.JS",
  "data/data-theory-unit2.JS",
  "data/data-theory-unit3.JS",
  "data/data-practical.JS",
  "data/data-images.js",
  "data/data-sims-unit1.js",
  "data/data-sims-unit2.js",
  "data/data-sims-unit3.js",
  "data/data-sims-practical.js",
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
  "js/sync.js",
  "js/simulations.js",
  "js/simulations-3d.js",
  "js/app.js"
];

var PRECACHE_URLS = new Map(PRECACHE.map(function (file) {
  var url = new URL(file, APP_SCOPE);
  url.searchParams.set("v", BUILD_HASH);
  return [url.pathname, url.href];
}));

// Cache the full shell before taking over from the previous worker.
async function installShell() {
  var documents = await Promise.all(SHELL_URLS.map(async function (url) {
    var response = await fetch(url, { cache: "no-store" });
    var marker = '<meta name="app-version" content="' + BUILD_HASH + '">';
    if (!response.ok || !(await response.clone().text()).includes(marker)) {
      throw new Error("App shell version is not ready: " + url.pathname);
    }
    return response;
  }));

  var cache = await caches.open(SHELL_CACHE);
  var requests = Array.from(PRECACHE_URLS.values(), function (url) {
    return new Request(url, { cache: "no-store" });
  });
  await cache.addAll(requests);
  await Promise.all(SHELL_URLS.map(function (url, i) { return cache.put(url.href, documents[i]); }));
  await self.skipWaiting();
}

self.addEventListener("install", function (e) {
  e.waitUntil(installShell());
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (key) {
        return key !== SHELL_CACHE &&
          (key.startsWith(CACHE_PREFIX) || /^vbioc-v\d+-(?:shell|img)$/.test(key));
      }).map(function (key) { return caches.delete(key); }));
    }).catch(function (err) {
      console.warn("Offline cache cleanup:", err);
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function fetchFresh(req) {
  if (req.mode !== "navigate") return fetch(req, { cache: "no-store" });

  // Fall back promptly when the device has Wi-Fi but the host is unreachable.
  var abort = new AbortController();
  var timer = setTimeout(function () { abort.abort(); }, 5000);
  return fetch(req, { cache: "no-store", signal: abort.signal }).finally(function () {
    clearTimeout(timer);
  });
}

async function matchOffline(req, url) {
  var options = { cacheName: SHELL_CACHE };
  var cached = await caches.match(req, options);
  if (cached) return cached;

  var precached = PRECACHE_URLS.get(url.pathname);
  if (!url.search && precached) {
    cached = await caches.match(precached, options);
    if (cached) return cached;
  }
  if (req.mode === "navigate") return caches.match(SHELL_URLS[1].href, options);
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  var url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;

  if (url.pathname.endsWith("/version.json") || url.searchParams.has("update_check")) {
    e.respondWith(fetch(req, { cache: "no-store" }).catch(function () { return Response.error(); }));
    return;
  }

  var network = fetchFresh(req).catch(function () { return null; });
  e.waitUntil(network.then(async function (response) {
    if (!response || !response.ok || response.status === 206) return;
    // Keep the precached documents aligned with this worker's offline assets.
    if (SHELL_URLS.some(function (shell) { return shell.pathname === url.pathname; })) return;
    var copy = response.clone();
    var cache = await caches.open(SHELL_CACHE);
    await cache.put(req, copy);
  }).catch(function () {
    // Cache quotas or an uncacheable response must not interrupt online use.
  }));
  e.respondWith(network.then(async function (response) {
    if (response && response.status < 500) return response;
    var cached = await matchOffline(req, url).catch(function () { return null; });
    return cached || response || Response.error();
  }));
});

// Listen for message events (e.g. from in-app update trigger)
self.addEventListener("message", function (e) {
  if (e.data && e.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
