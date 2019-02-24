var express = require("express");
var app = express();
var fs = require("fs");

var file = fs.createReadStream(__dirname+"/info.txt", "utf8");
var writeFile = fs.createWriteStream(__dirname+"/infoCopy.txt");

app.get("/", function(req, res) {
    res.send(`Basic Operations of Stream:
            Enter Urls: Readfile or Writefile`)
})

app.get("/readfile", function(req, res) {
    file.on("data", function(chunk) {
        res.send(chunk);
    })
})

app.get("/writefile", function(req, res) {
    file.on("data", function(chunk) {
        writeFile.write(chunk);
        res.send("File Write Done.."); 
    })
})

app.listen(8000);