const { fork } = require("child_process");
const path = require("path");

const object = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 5,
    f: {
      i: 9,
      j: 10,
      k: {
        l: 11,
        m: 12,
        yy: {
          lb: 11,
          bm: 12,
        },
      },
      n: {
        o: 13,
        p: 14,
        q: 15,
      },
    },
  },
  av: 1,
  be: 2,
};

function printObject(object, count) {
  let cnt = 0;
  Object.keys(object).forEach((row) => {
    // console.log(typeof object[row]);
    if (typeof object[row] == "object") {
      for (let i = 0; i < cnt; i++) process.stdout.write("  ");
      process.stdout.write(row + "\n");
      printObject(object[row], ++cnt);
    } else {
      for (let i = 0; i < cnt; i++) process.stdout.write("  ");
      process.stdout.write(row + " --- " + object[row] + "\n");
    }
  });
}

printObject(object);

// const forked = fork(path.resolve("./src/fork", "child.js"));

// forked.on("message", (message) => {
//   console.log(Object.keys(message));
//   // console.log(`message from child -> ${JSON.stringify(message)}`);
// });

// forked.send({
//   hello: "world",
// });
