/* C++ function mock */

function printf(data) {
  process.stdout.write(data);
}

/* ::NODEJS CHILD PROCESS:: */

/* ::SPAWN */
/**
const { spawn } = require("child_process");

const child = spawn("pwd");

child.stdout.on("data", function (data) {
  console.log(`stdout data -> ${data}`);
});

child.stderr.on("data", function (data) {
  console.log(`stderr on -> ${data}`);
});

child.on("exit", function (code, signal) {
  console.log(`process on -> ${code}\nprocess signal -> ${signal}`);
});

/**/

// exec
/*
const { exec } = require("child_process");
exec("docker images", function (err, stdout, stderr) {
  if (err) {
    console.log("error executing command: " + err);
  }
  console.log(stdout);
});
/**/

// spawn with best practice
// spawn is good choise when there ar large data so that we can get data by chunks

const { spawn } = require("child_process");

// const child = spawn("docker images", {
//   shell: true,
// });
const child = spawn("docker ps -a", {
  shell: true,
});


child.stdout.on("data", function (data) {
  process.stdout.write(data.toString());
});

const child2 = spawn("echo $FOO", {
  shell: true,
  env: { FOO: 12 }, //NOTE: env can be added
});

child2.stdout.on("data", function (data) {
  printf(data.toString());
});
