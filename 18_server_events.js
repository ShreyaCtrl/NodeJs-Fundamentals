const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  response.end(`<h1>Request sent successfully!!</h1>`);
  // response.end();
});

console.log("Server running at http://127.0.0.1:5000/");

server.listen(5000);
