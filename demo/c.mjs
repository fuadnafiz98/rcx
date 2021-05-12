// import util from "util";
import { exec, spawn } from "child_process";

// const Spawn = util.promisify(spawn);
// const Exec = util.promisify(exec);

async function demo() {
  try {
    //TODO
    const fileName = process.env.codePath;
    console.log("fileName -> ", fileName);
    // const { stdout, stderr } = await Exec(`gcc ${fileName}.c -o ${fileName} && ${fileName}`);
    const subProcess = spawn(`gcc ${fileName}.c -o ${fileName} && ${fileName}`, {
      shell: true,
      detached: true,
    });
    subProcess.stdout.on("data", function (data) {
      console.log(data.toString());
    });
    subProcess.stdout.on("end", function (data) {
      // console.log("end...");
    });
    setTimeout(() => {
      if (!subProcess.killed) {
        // subProcess.kill();
        // kill the all sub processes of this pid
        // this is why the `-` is used
        process.kill(-subProcess.pid);
        console.log("lol, nice try :p");
      }
    }, 5000);
  } catch (e) {
    console.log(e.stderr.red);
  }
}
demo();
