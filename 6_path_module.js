const path = require('path');
console.log(path);
console.log(path.sep);
console.log(path.join('/content', 'sub', 'test.txt'));
console.log(path.basename('/content/sub/test.txt'));
console.log(path.resolve(__dirname, 'content', 'sub', 'test.txt'));
// console.log()