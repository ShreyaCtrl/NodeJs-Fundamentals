const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const writeData = async (path) => {
  const firstData = await readFilePromise("./contents/first.txt", "ascii");
  const secondData = await readFilePromise("./contents/second.txt", "ascii");

  console.log(firstData);
  console.log(secondData);
  writeFilePromise(
    path,
    `the data to be appended : ${firstData} & ${secondData}`,
    { flag: "a" },
    () => {
      console.log("Why isnt this seen in console  in absense of flag?");
    }
  );
};

writeData("./contents/result-async.txt");
