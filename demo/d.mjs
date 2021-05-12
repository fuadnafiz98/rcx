// import util from "util";
import { exec, spawn } from "child_process";

// const Spawn = util.promisify(spawn);
// const Exec = util.promisify(exec);

async function demo() {
  try {
    //TODO
    const fileName = process.env.codePath;
    const ffile = process.env.fileName;
    console.log("fileName -> ", fileName);
    console.log("file -> ", ffile);
    // const { stdout, stderr } = await Exec(`gcc ${fileName}.c -o ${fileName} && ${fileName}`);
    const subProcess = spawn(
      // `gcc ${fileName}.c -o ${fileName} && ${fileName}`,
      // `docker run --rm --mount type=bind,source="$(pwd)"/${ffile},target=/app -e filePath='sol' basic:0.1`,
      `docker run --rm --mount type=bind,source=$(pwd)/${ffile},target=/usr/src/sol -e filePath='sol' --name="${ffile}" basic:0.2`,
      {
        shell: true,
        detached: false,
      }
    );
    subProcess.on("message", function (data) {
      console.log(message);
    });
    subProcess.stdout.on("data", function (data) {
      console.log(data.toString());
    });
    subProcess.stderr.on("data", function (data) {
      console.log(data.toString());
    });
    subProcess.stdout.on("end", function (data) {
      if (!subProcess.killed) {
        // subProcess.kill();
        // kill the all sub processes of this pid
        // this is why the `-` is used
        console.log("completed");
        // clearTimeout(limit);
        process.kill(-subProcess.pid);
      }
    });
    setTimeout(() => {
      console.log("deleting loop", ffile);
      if (!subProcess.killed) {
        spawn(`docker kill ${ffile}`, {
          shell: true,
          detached: false,
        });
        // const { stdout, stderr } = await Exec(`docker kill ${ffile}`);
        // console.log(stderr);
        // console.log(stdout);
        // subProcess.kill();
        // kill the all sub processes of this pid
        // this is why the `-` is used
        // process.kill(-subProcess.pid);
        console.log("lol, nice try :p");
      }
    }, 5000);
  } catch (e) {
    console.log(e.stderr.red);
  }
}
demo();
