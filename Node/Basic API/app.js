var express = require("express");
var app = express();
var fs = require("fs");
var cors = require("cors");

app.use(cors());

app.get("/",function(req,res) {
    res.send("ITS run")
})

app.get("/getdata",function(req,res) {
    fs.readFile( "emp.json", function(err, data) {
        if(!err) {
            res.send(JSON.parse(data));                
        } else {
            res.send("Error to load")
        }
    })
})

app.post('/addUser', function (req, res) {
    console.log(req.body);
    // First read existing users.
    fs.readFile( __dirname + "/" + "emp.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user3"] = {
            "name" : req.body.name,
            "id": req.body.id
         };
        res.end( JSON.stringify(data));
    });
 })

app.listen(2000);
console.log("server run on 2000")