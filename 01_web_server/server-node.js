const http = require("http");

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello This is Server Talking");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("thanks For ordering ice tea its really hot ");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end(" 404 Not found");
  }
});

server.listen(port, hostname, () => {
  console.log(` Server is running  at http://${hostname}:${port}`);
});
