const { createHash } = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placeholder = "__BUILD_HASH__";
const ignoredDirectories = new Set(["node_modules", "repo", "tmp", "__pycache__"]);
const sourceFile = /\.(?:html?|css|[cm]?js|json)$/i;
const textFile = /\.(?:html?|css|[cm]?js|json|csv|tsv|txt|xml|ya?ml)$/i;

function collectFiles(directory = "") {
  const files = [];
  for (const entry of fs.readdirSync(path.join(root, directory), { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const relative = path.posix.join(directory, entry.name);
    if (entry.isDirectory() && !ignoredDirectories.has(entry.name)) {
      files.push(...collectFiles(relative));
    } else if (entry.isFile() && relative !== "version.json" &&
               (sourceFile.test(relative) || relative.startsWith("data/"))) {
      files.push(relative);
    }
  }
  return files;
}

function versionUrl(url, hash) {
  if (!url || /^(?:[a-z][\w+.-]*:|\/\/|#)/i.test(url)) return url;
  const [address, ...fragment] = url.split("#");
  const suffix = fragment.length ? "#" + fragment.join("#") : "";
  if (/(\?|&(?:amp;)?)v=[^&]*/.test(address)) {
    return address.replace(/(\?|&(?:amp;)?)v=[^&]*/, "$1v=" + hash) + suffix;
  }
  return address + (address.includes("?") ? "&amp;" : "?") + "v=" + hash + suffix;
}

function versionIndex(html, hash) {
  return html
    .replace(/(<meta name="app-version" content=")[^"]*(")/, "$1" + hash + "$2")
    .replace(/<(?:script\b[^>]*?\ssrc|link\b[^>]*?\shref)=("[^"]*"|'[^']*')/gi,
      (tag, quotedUrl) => tag.slice(0, -quotedUrl.length) + quotedUrl[0] +
        versionUrl(quotedUrl.slice(1, -1), hash) + quotedUrl[0]);
}

function versionWorker(script, hash) {
  return script.replace(/(var BUILD_HASH = ")[^"]+(";)/, "$1" + hash + "$2");
}

function writeIfChanged(relative, contents) {
  const file = path.join(root, relative);
  if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== contents) {
    fs.writeFileSync(file, contents);
  }
}

function buildVersion() {
  const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const worker = fs.readFileSync(path.join(root, "service-worker.js"), "utf8");
  const normalizedIndex = versionIndex(index, placeholder);
  const normalizedWorker = versionWorker(worker, placeholder);
  if (!normalizedIndex.includes('name="app-version" content="' + placeholder + '"') ||
      !normalizedWorker.includes('var BUILD_HASH = "' + placeholder + '";')) {
    throw new Error("The app version marker is missing from index.html or service-worker.js.");
  }
  const hash = createHash("sha256");

  for (const relative of collectFiles().sort()) {
    let content = fs.readFileSync(path.join(root, relative));
    // Normalize generated version fields so repeated builds produce the same hash.
    if (relative === "index.html") content = normalizedIndex;
    if (relative === "service-worker.js") content = normalizedWorker;
    // Git checkout line endings can vary by platform.
    if (textFile.test(relative)) content = content.toString().replace(/\r\n/g, "\n");
    hash.update(relative + "\0").update(createHash("sha256").update(content).digest());
  }

  const version = hash.digest("hex");
  writeIfChanged("index.html", versionIndex(index, version));
  writeIfChanged("service-worker.js", versionWorker(worker, version));
  writeIfChanged("version.json", JSON.stringify({ hash: version }, null, 2) + "\n");
  return version;
}

if (require.main === module) console.log(`Site version ${buildVersion()}`);
module.exports = buildVersion;
