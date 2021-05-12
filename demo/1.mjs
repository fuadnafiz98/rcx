import util from "util";
import { exec, spawn } from "child_process";
import colors from "colors";

const Spawn = util.promisify(spawn);
const Exec = util.promisify(exec);

async function demo() {
  try {
    const fileName = process.env.codePath;
    console.log("fileName -> ", fileName);
    const { stdout, stderr } = await Exec(`gcc ${fileName}.c -o ${fileName} && ${fileName}`);
    console.log(stdout);
    // if (stderr) console.log(stderr);
  } catch (e) {
    console.log(e.stderr.red);
  }
}
demo();
// const Spawn = util.promisify(spawn);

// async function demo() {
//   try {
//     const run = await Spawn("gcc", ["in.c", "-o", "1", "&&", "./1"]);

//     console.log(run);
//     run.stdout.on("data", function (data) {
//       console.log(data);
//     });
//     run.stderr.on("data", function (data) {
//       console.log("err -", data);
//     });
//     run.on("exit", function (code) {
//       console.log(code);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }
