import { Request, Response } from "express";
import fs from "fs";
import { spawn } from "child_process";
import path from "path";
import readline from "readline";
import util from "util";

import randomString from "../../utils/randomString";

const checkHealth = (req: Request, res: Response) => {
  return res.json({
    status: "ok",
  });
};

const runGCC = (req: Request, res: Response) => {
  let fileName = randomString(5);
  let code = req.body.code;
  console.log("---code---");
  console.log(code);
  console.log(path.resolve("./dist/", `${fileName}`));
  fs.mkdirSync(path.resolve("./dist/", `${fileName}`));
  fs.writeFileSync(path.resolve(`./dist/${fileName}`, "sol.c"), code);
  console.log("---code---");
  try {
    const child = spawn(`node ./dist/run/gcc.js`, {
      shell: true,
      env: {
        ...process.env,
        codePath: path.resolve(`./dist/${fileName}`, "sol"),
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
        // console.log(line);
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
      console.log("[child] -> DONE");
      fs.rmSync(path.resolve("./dist/", `${fileName}`), { recursive: true });
      return res.send(d);
    });
  } catch (error) {
    console.log(error);
  }
};


const runCPP = (req: Request, res: Response) => {
  let fileName = randomString(5);
  let code = req.body.code;
  console.log("---code---");
  console.log(code);
  console.log(path.resolve("./dist/", `${fileName}`));
  fs.mkdirSync(path.resolve("./dist/", `${fileName}`));
  fs.writeFileSync(path.resolve(`./dist/${fileName}`, "sol.c"), code);
  console.log("---code---");
  try {
    const child = spawn(`node ./dist/run/cpp.js`, {
      shell: true,
      env: {
        ...process.env,
        codePath: path.resolve(`./dist/${fileName}`, "sol"),
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
        // console.log(line);
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
      console.log("[child] -> DONE");
      fs.rmSync(path.resolve("./dist/", `${fileName}`), { recursive: true });
      return res.send(d);
    });
  } catch (error) {
    console.log(error);
  }
};

const runNodejs = (req: Request, res: Response) => {
  let fileName = randomString(5);
  let code = req.body.code;
  console.log("---code---");
  console.log(code);
  console.log(path.resolve("./dist/", `${fileName}`));
  fs.mkdirSync(path.resolve("./dist/", `${fileName}`));
  fs.writeFileSync(path.resolve(`./dist/${fileName}`, "sol.c"), code);
  console.log("---code---");
  try {
    const child = spawn(`node ./dist/run/node.js`, {
      shell: true,
      env: {
        ...process.env,
        codePath: path.resolve(`./dist/${fileName}`, "sol"),
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
        // console.log(line);
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
      console.log("[child] -> DONE");
      fs.rmSync(path.resolve("./dist/", `${fileName}`), { recursive: true });
      return res.send(d);
    });
  } catch (error) {
    console.log(error);
  }

};
const runPython = (req: Request, res: Response) => {
  let fileName = randomString(5);
  let code = req.body.code;
  console.log("---code---");
  console.log(code);
  console.log(path.resolve("./dist/", `${fileName}`));
  fs.mkdirSync(path.resolve("./dist/", `${fileName}`));
  fs.writeFileSync(path.resolve(`./dist/${fileName}`, "sol.c"), code);
  console.log("---code---");
  try {
    const child = spawn(`node ./dist/run/python.js`, {
      shell: true,
      env: {
        ...process.env,
        codePath: path.resolve(`./dist/${fileName}`, "sol"),
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
        // console.log(line);
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
      console.log("[child] -> DONE");
      fs.rmSync(path.resolve("./dist/", `${fileName}`), { recursive: true });
      return res.send(d);
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  checkHealth,
  runGCC,
  runCPP,
  runNodejs,
  runPython,
};
