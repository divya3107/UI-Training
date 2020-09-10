
var http = require('http');
var requestListener = function(req,res){
    res.writeHead(500);
    res.end("<h1> Hello World </h1>")
}
var server = http.createServer(requestListener);

server.listen("3000");


