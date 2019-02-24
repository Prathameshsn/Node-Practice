var fs = require("fs");

function readFile(path,responce) {
    fs.readFile(path,function(error,data) {
        if(error) {
            responce.writeHead(404);
            responce.write("File Not Found..")
        } else {
            responce.write("Data is"+data);
        }
        responce.end();
    })
}

module.exports = {
    serverFunction : function(request, responce) {
        responce.writeHead(200,{'content-type':'text/html'});
        readFile("text.html", responce);
        responce.write("Hello World"+request.url);
    }
}