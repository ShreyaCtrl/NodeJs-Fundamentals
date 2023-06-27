const http = require('http');
// console.log(http);

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('This is Home page');
        res.end();
    }
    else if (req.url === '/about') { 
        res.write('This is About page');
        res.end();
    }
    // console.log(req);
    else {
        res.write('<h1>Oops!! Page not found</h1>');
        res.end('Have no idea how this works !!!');
    }
})

// console.log(server);

server.listen(5000);
// The request object wont be logged until you refresh the window on screen as it will only be created once the page is requested by browser 
// Open in Browser : localhost:5000