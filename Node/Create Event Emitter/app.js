var sample = require("./event");
var http = require("http");

var sampleObj = new sample();

sampleObj.on("fireEvent", function() {
    console.log("Event Listen");
})

sampleObj.emit("fireEvent");

sampleObj.startServer(2000)

