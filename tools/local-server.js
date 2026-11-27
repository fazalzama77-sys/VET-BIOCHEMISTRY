/* ============================================================
   Dependency-free local HTTP development server
   Veterinary Biochemistry Studio
   ============================================================ */
var http = require("http"),
    fs = require("fs"),
    path = require("path"),
    buildVersion = require("./build-version"),
    root = path.resolve(__dirname, "..");

var types = {
  ".html": "text/html; charset=utf-8",
  ".js":   "text/javascript; charset=utf-8",
  ".JS":   "text/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt":  "text/plain; charset=utf-8",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".pdf":  "application/pdf"
};

var port = Number(process.argv[2]) || 5199;

http.createServer(function (req, res) {
  var url = decodeURIComponent(req.url.split("?")[0]);
  if (url === "/") url = "/index.html";
  if (url === "/index.html" || url === "/version.json" || url === "/service-worker.js") {
    try {
      buildVersion();
    } catch (err) {
      console.error("Could not generate the site version:", err);
      res.writeHead(500);
      return res.end("Could not generate the site version");
    }
  }
  var file = path.resolve(root, "." + url);

  if (!file.startsWith(root + path.sep) && file !== root) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Not found: " + url);
    }
    var ext = path.extname(file);
    res.writeHead(200, {
      "Content-Type": types[ext] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(data);
  });
}).listen(port, function () {
  console.log("============================================================");
  console.log("  Veterinary Biochemistry Studio Local Server Running");
  console.log("  Access URL: http://localhost:" + port + "/");
  console.log("============================================================");
});
