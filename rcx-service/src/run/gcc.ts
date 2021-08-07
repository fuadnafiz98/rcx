import { exec, spawn } from "child_process";

async function demo() {
  try {
    let message = "";
    //TODO
    // const fileName2 = process.env.codePath;
    const fileName = process.env.fileName;
    // console.log("fileName -> ", fileName);
    // console.log("file -> ", fileName2);
    const subProcess = spawn(
      `docker run --rm --mount type=bind,source=$(pwd)/dist/${fileName},target=/usr/src/sol -e filePath='sol' --name="${fileName}" basic:0.3`,
      {
        shell: true,
        detached: false,
      }
    );
    subProcess.on("message", function (data) {
      // console.log(message);
      message += data;
    });
    subProcess.stdout.on("data", function (data) {
      // console.log(data.toString());
      message += data;
    });
    subProcess.stderr.on("data", function (data) {
      // console.log(data.toString());
      message += data;
    });
    subProcess.stdout.on("end", function () {
      // console.log("finally");
      // console.log((message.length * 2) / 1000000);
      if ((message.length * 2) / 1000000 <= 1000) {
        console.log(message);
      }
      if (!subProcess.killed) {
        // subProcess.kill();
        // kill the all sub processes of this pid
        // this is why the `-` is used
        // clearTimeout(limit);
        // process.kill(-subProcess.pid);
        //@ts-ignore
        process.kill(-subProcess?.pid);
        // console.log("completed");
      }
    });
    setTimeout(() => {
      // console.log("deleting loop", fileName);
      if (!subProcess.killed) {
        spawn(`docker kill ${fileName}`, {
          shell: true,
          detached: false,
        });
        console.log("lol, nice try :p");
      }
    }, 5000);
  } catch (e) {
    console.log(e.stderr.red);
  }
}

demo();
