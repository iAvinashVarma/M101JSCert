var express = require('express');
var app = express();
var engines = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost', function(error, client){
    if(error) throw error;

    var db = client.db('video');

    app.get('/', function(request, response){
        db.collection('movies').find({}).toArray(function(error, docs){
            if(error) throw error;
            response.render('movies', { 'movies': docs }); 
        });
    });

    app.use(function(request, response){
        response.sendStatus(404);
    });

    var server = app.listen(8002, function(){
        var port = server.address().port;
        console.log("Server is running at http://localhost%s.", port);
    })
});

