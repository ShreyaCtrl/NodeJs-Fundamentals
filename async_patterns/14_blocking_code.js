const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Welcome to our home page</h1>");
  } else if (req.url == "/about") {
    for (i = 0; i < 1000; i++)
      for (j = 0; j < 1000; j++) console.log(`${i} ${j}`);
    res.end("<h1>Here is our short history</h1>");
  }
});

server.listen(5000, () => {
  console.log("server listening on port 5000 ...");
});

// the server is listening synchronously - so when multiple users are accessing the website only one user request will be running on server
// the other user request will be waiting for the first user request to complete
// if one user requests for about page the others too would have to wait until that request (blocking) is satisfied even if their request is too small
