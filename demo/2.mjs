function bb(i) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("hi - 2");
    }, i * 1000);
  });
  return promise;
}

bb(5).then(function (data) {
  console.log(data);
});