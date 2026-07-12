const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.join(process.cwd(), "out");
const rootWithSeparator = `${path.resolve(root)}${path.sep}`;
const port = Number(process.env.PORT || 3000);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function resolveFile(requestUrl) {
  const requestPath = decodeURIComponent((requestUrl || "/").split("?")[0] || "/");
  const cleanPath = requestPath.replace(/^\/+/, "");
  const candidates = requestPath.endsWith("/")
    ? [path.join(root, cleanPath, "index.html")]
    : [
        path.join(root, cleanPath),
        ...(path.extname(cleanPath)
          ? []
          : [
              path.join(root, `${cleanPath}.html`),
              path.join(root, cleanPath, "index.html"),
            ]),
      ];

  for (const candidate of candidates) {
    const filePath = path.resolve(candidate);

    if (filePath !== path.resolve(root) && !filePath.startsWith(rootWithSeparator)) {
      return null;
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    }
  }

  return path.join(root, "404.html");
}

const server = http.createServer((request, response) => {
  let filePath;

  try {
    filePath = resolveFile(request.url || "/");
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Bad request");
    return;
  }

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (!fs.existsSync(filePath)) {
    const body = "<!doctype html><title>Page not found</title><h1>Page not found</h1>";

    response.writeHead(404, {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Length": Buffer.byteLength(body),
      Connection: "close",
    });
    response.end(body);
    return;
  }

  if (path.basename(filePath) === "404.html") {
    response.statusCode = 404;
  }

  response.setHeader("Content-Type", types[path.extname(filePath)] || "application/octet-stream");
  const stream = fs.createReadStream(filePath);

  stream.on("error", () => {
    if (!response.headersSent) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    }

    response.end("Unable to read static file");
  });

  stream.pipe(response);
});

server.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Static preview running at http://127.0.0.1:${port}`);
});
