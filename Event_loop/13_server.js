const http = require("http");
// console.log(http);

const server = http.createServer((req, res) => {
  console.log("request sent");
  res.end("<h1>Hello World</h1>");
});

server.listen(5000, () => {
  console.log("server listening on port 5000 ");
});
