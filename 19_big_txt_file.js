const { writeFile } = require('fs');

for (let i = 0; i < 10000; i++) {
    writeFile('./contents/big.txt', `Hello world ${i}\n`, { flag: 'a' }, () => { ; });
}