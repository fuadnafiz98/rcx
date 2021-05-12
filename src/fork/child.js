process.on("message", (message) => {
  console.log(`message from parent ${message}`);
});

var counter = 0;

setInterval(() => {
  process.send({
    counter: ++counter,
  });
}, 1002);
