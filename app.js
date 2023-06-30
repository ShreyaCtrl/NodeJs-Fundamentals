const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./contents/big.txt', 'ascii');
  fileStream.on('open', () => {
    // pipe creates a writeStream of the corresponding readStream to write data in form of chunks   
    fileStream.pipe(res);
    // due to this the large data which by using writeFile would have been sent as a single large response is now sent in form of chunks 
  })
  fileStream.on('error', (err) => { 
    res.end(err);
  })
}).listen(5000);

console.log('server listening on localhost:5000');