import util from "util";
import { exec } from "child_process";

const Exec = util.promisify(exec);

async function demo() {
  const { stdout, stderr } = await Exec("ls");
  console.log("stdout:");
  console.log(stdout);
  console.log("stderr: ", stderr);
}

demo();
