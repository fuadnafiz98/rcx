function getCallerFilePath() {
  let stack;
  //@ts-ignore
  stack = new Error().stack.split("\n");
  return stack[2].slice(
    stack[2].lastIndexOf("(") + 1,
    stack[2].lastIndexOf(".ts") + 3
  );
}

const log = (obj: any) => {
  console.log(getCallerFilePath(), obj);
};

export default log;
