console.log("first task");
setTimeout(() => {
  console.log("second task : ");
  console.log(
    "This wont run until all tasks that are scheduled in task queue are completed. This task calls the setTimeout API and then is passed to the callback stack"
  );
}, 0);
console.log("third task");
console.log("Should have actually run after the second task");
console.log("fourth task");
