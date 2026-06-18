const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const port = 8080;
const root = __dirname;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".mp3": "audio/mpeg"
};

function getLocalIPs() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter(item => item && item.family === "IPv4" && !item.internal)
    .map(item => item.address);
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, `http://localhost:${port}`).pathname);
  const safePath = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": mime[path.extname(filePath).toLowerCase()] || "application/octet-stream"
    });
    res.end(data);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log("");
  console.log("生日相册手机预览已启动");
  console.log("");
  console.log("电脑访问: http://localhost:8080");
  getLocalIPs().forEach(ip => {
    console.log(`手机访问: http://${ip}:8080`);
  });
  console.log("");
  console.log("请让手机和电脑连接同一个 Wi-Fi。关闭这个窗口即可停止预览。");
  console.log("");
});
