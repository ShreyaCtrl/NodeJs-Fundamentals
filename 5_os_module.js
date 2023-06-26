const { log } = require('console');
const os = require('os');
console.log(os);
log('Platform : ', os.platform());
log('HomeDir : ', os.homedir());
log("freemem : ", os.freemem(), 'bytes');
log("totalmem : ", os.totalmem(), "bytes");
log('type : ', os.type());
// Returns the OS architecture for which the code was compiled  
log('arch : ', os.arch());
// Provides information about each core of CPU
// log('cpus : ', os.cpus());
// Returns the time machine is running in seconds  
log('uptime : ', os.uptime()); 
// log('uptime : ', Number.parseInt(os.uptime()/60), ':', os.uptime()%60);
// The value of `homedir` returned by `os.userInfo()` is provided by the operating system. This differs from the result of `os.homedir()`, which queries environment variables for the home directory before falling back to the operating system response¹⁴. 
log('userInfo : ', os.userInfo());
log('version : ', os.version());
log('release : ', os.release());
log('machine : ', os.machine());
log('tmpdir : ', os.tmpdir());
log('hostname : ', os.hostname());