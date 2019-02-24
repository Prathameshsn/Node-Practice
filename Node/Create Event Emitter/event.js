var http = require("http")

var eventArr = [];
function eventfn() {}

eventfn.prototype.on = function(type, functionName) {
    if(!eventArr[type]) {
        eventArr[type] = [];
    }
    eventArr[type].push(functionName);    
}

eventfn.prototype.emit = function (type) {  
    for(key in eventArr) {
        if(key == type) {
            eventArr[key][0]();
        }
    }
}

eventfn.prototype.startServer = function(poryNumber) {
    http.createServer(function(req, res) {
        res.end("Server Started")
    }).listen(poryNumber)
}

module.exports = eventfn;