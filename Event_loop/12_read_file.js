const { readFile } = require("fs");
console.log("reading a file");
readFile("./contents/event_loop.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // if the changes are made in the text file the changes wont be noticed to again run the app.js
    console.log(res);
    console.log(
      "Since this is async task it will be sent to the kernel thread for running and return to callstack when it should be run"
    );
  }
});
console.log("completed reading a file");
