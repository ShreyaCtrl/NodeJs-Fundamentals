// local dependency - installed only for this project
// npm i <packageName>

// global dependency - installed in the system
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const lod = require('lodash');
// import a module from node_modules folder
// difference in external and internal module
// internal available by default
// external need to be installed
console.log(lod);

const arr = [1, [2, 3, [4, 5, [6]]]];
const newArr = lod.flattenDeep(arr);
console.log(newArr);
console.log('meow');
// installing dev dependencies - npm i <packagename> -g

// package-lock.json
// every package we install has dependencies which have versions
// if a certain package version changes then the packages which have that package as dependency may break
// to avoid this we have package-lock.json
// package-lock.json stores the version of the dependencies

// npm uninstall <packageName> -g

// versions : 3.4.5
// 3 : if changed indicates major change - a lower version in your app may cause breaking change
// 4 : if changed indicates minor change - a lower version (i.e 3.3.6) in your app may not cause breaking changes - meaning it is backward compatible - a lower middle number allowed
 
