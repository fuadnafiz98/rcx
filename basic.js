const { exec } = require("child_process");

// const ls = exec("ls -l", function (err, stdout, stderr) {
//   if (err) {
//     console.log(error.stack);
//   }
//   console.log(stdout);
// });

const ls = exec("g++ sol.cpp", function (err, stdout, stderr) {
  if (err) {
    console.log(err.stack);
  }
});

ls.on("exit", function (code) {
  const output = exec("./a.out", function (err, stdout, stderr) {
    if (err) {
      console.log(err.stack);
    }
    console.log(stdout);
  });
  output.on("exit", function (code) {
    console.log(`Program ran with status code ${code}`);
  });
});
