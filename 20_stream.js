const { createReadStream } = require("fs");

const options = {
  highWaterMark: 90000,
  encoding: "utf-8",
};
const stream = createReadStream("./contents/big.txt", options);

stream.on("data", (result) => {
  console.log(result);
});

// reads data in form of chunks for too large files
// default chunk size = 64KB
// highWaterMark = control size of chunk
// setting options in stream is optional
