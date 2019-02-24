// create server
// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.write(JSON.stringify([1,2,3]));
//     res.end();
// });
// server.listen(2000);

// read file
// var fs = require("fs");
// var data = fs.readFileSync("../ajax/my.js");
// console.log(typeof data);
// console.log(data.toString());

// fs.readFile("../ajax/my.js",function (req, res) {
//   console.log("run")
//   console.log(res.toString());
// });


var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/data', function (req, res) {
  console.log(req.param);
  res.send('Data Found..')
})
 
app.listen(3000)