const { readFileSync, writeFileSync } = require('fs');
console.log(readFileSync, writeFileSync);
console.log('start');
const first0 = readFileSync('./contents/first.txt');
console.log('Encoding in UTF-18', first0);
const first1 = readFileSync('./contents/first.txt', "utf8");
console.log('Encoding in UTF-8', first1);
// ascii and utf-8 also give same result

const second = readFileSync('./contents/second.txt', 'ascii');
console.log(second);

// write the file for the first time 
// if any content already added will be overwritten 
writeFileSync('./contents/result-sync.txt', `Here is the result: ${first0}, ${second}`);
console.log(readFileSync('./contents/result-sync.txt', 'ascii'));

writeFileSync('./contents/result-sync.txt', 'Appending data to the file', {flag: 'a'});
console.log(readFileSync('./contents/result-sync.txt', 'utf8'));
console.log('end');