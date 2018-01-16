var http = require('http');
var express = require('express');
var cons = require('consolidate');
var mongodb = require('mongodb');
var port = 8000;

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end("Hello, world!");
});

server.listen(port);
console.log("Server is running at http://localhost" + port);