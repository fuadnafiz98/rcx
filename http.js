const http = require("http");

/* this is a kind of emit emitter */
/*
const server = http.createServer(); 

server.on("request", function (request, response) { 

});
/**/

const server = http.createServer(function (request, response) {
  const { method, url, headers } = request;
  console.log(method, url, headers);
  if (url == "/") res.send("hello from home");
  response.end();
});


server.listen(1234, function () { 
  console.log("🗑 server up and running...");
});


