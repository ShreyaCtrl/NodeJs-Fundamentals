console.log("Initially module children array empty");
// console.log(module);
// const names = require("./3_names");
console.log("after import children array contains an object named module for each module imported");
// console.log(module);
// console.log(names);
const func = require("./4_utils");

// console.log(module);
console.log(typeof(func),':', func);
// func.func(names.cat)

// if we re import a module it does not import and run all over again 
require('./3_names');
