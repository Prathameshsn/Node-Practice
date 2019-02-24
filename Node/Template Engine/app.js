var express = require("express");
var app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.send("Hello..")
})

app.get("/renderfile/:name", function(req, res) {
 res.render("student", {name:req.params.name})
})

app.listen(8000);