// while exporting data we can choose which ones to share and specifically share those 
console.log('3_name.js')
const puppy = 'coffee';
const cat = 'garfield';
const dog = 'odie';
// console.log(module);

// each file is by default is a module and the variables and function reside inside the module
module.exports = { cat, dog }