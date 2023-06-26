const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./contents/first.txt', 'ascii', (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
        readFile('./contents/second.txt', 'ascii', (e, result2) => {
            if(e) {
                console.log(e);
            }
            else {
                console.log(result2);
                writeFile('./contents/result-async.txt', `Here's the async result : ${result}, ${result2}`, () => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        writeFile(
                            "./contents/result-async.txt",
                            `Appending data to the file`,{ flag: 'a'}, 
                            () => {
                                console.log('Done with this task : ');
                          });
                    }
                });
            }
        })
    }
})
console.log('end');