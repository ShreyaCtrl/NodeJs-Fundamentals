const EventEmitter = require("events");

console.log(EventEmitter);

// on - create an event
// emit - emit that event

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`data received`);
});

customEmitter.on("response", () => {
  console.log("Receiving some more data!!");
});

customEmitter.emit("response");

// customEmitter.emit('request');
customEmitter.emit('request');