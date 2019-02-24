var http = require("http");
var app = require("./app");

http.createServer(app.serverFunction).listen(4000);