// const { readFile, writeFile } = require('fs').promises;
// if readFile and writeFile imported as above then they return promises  by default
const { readFile, writeFile } = require("fs");
const getData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, resp) => {
      if (err) {
        reject(err);
      }
      resolve(resp);
    });
  });
};

// getData('./contents/first.txt').then(
//     (resp) => console.log(resp)
// ).catch (
//     (err) => console.log(err)
// )

const writeData = async (path) => {
  const firstData = await getData("./contents/first.txt");
  const secondData = await getData("./contents/second.txt");

  // console.log(firstData);
  // console.log(secondData);
  writeFile(
    path,
    `the data to be appended : ${firstData} & ${secondData}`,
    () => {
      console.log("Done with this task");
    }
  );
};

writeData("./contents/result-async.txt");
