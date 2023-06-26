console.log('process - info about environment when project executed');
// console.log(process);
// console.log('process - process environment variables (all)');
// console.dir(process.env, {depth: null});
console.log('module - info of current module');
console.log(module);
console.log('require - function to use modules');
// console.log(require);
console.log('global - info about global object');
// console.log(global);
console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log('hello world');
}, 1234);