const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const util = require("util");
const path = require("path");
const readline = require("readline");

function randomString(length) {
  let result = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let n = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * n));
  }
  return result;
}

const app = express();
app.use(bodyParser.json());

const { spawn } = require("child_process");

app.get("/", function (req, res) {
  res.send("hi");
});

app.post("/run/:id", async function (req, res) {
  let fileName = randomString(5);
  let id = req.params.id;
  let bd = req.body;
  bd = bd.code;
  console.log(bd);

  fs.mkdirSync(path.resolve("./", `${fileName}`));
  fs.writeFileSync(path.resolve(`./${fileName}`, "sol.c"), bd);

  // const child = spawn(`node ${id}.mjs`, {
  const child = spawn(`node d.mjs`, {
    shell: true,
    env: {
      ...process.env,
      codePath: path.resolve(`./${fileName}`, "sol"),
      //TODO
      fileName: fileName,
    },
  });
  let d = "";
  readline
    .createInterface({
      input: child.stdout,
      terminal: false,
    })
    .on("line", function (line) {
      console.log(line);
      d = d + line + "\n";
    });

  child.stdout.on("data", function (data) {
    console.log(child.pid);

    // setTimeout(() => {
    //   fs.rmdirSync(path.resolve("./", `${fileName}`), { recursive: true });
    //   if (!child.killed) {
    //     child.kill();
    //     // process.kill(-child.pid);
    //     // res.statusCode = 418;
    //     // res.statusMessage = "lol, nice try:p"
    //     d += "lol, nice try";
    //   }
    // }, 6000)

    // console.log(data.toString());
    // console.log(data.toString().replace(/[\n\r]/g, ""));
    // console.log("----");
    // d += data.toString().replace(/[\n\r]/g, "");
  });
  child.stdout.on("end", function () {
    fs.rmdirSync(path.resolve("./", `${fileName}`), { recursive: true });
    return res.send(d);
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
