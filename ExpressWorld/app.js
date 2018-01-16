var express = require('express');
var app = express();
var engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(request, response){
    response.render('hello', { 'name': 'Templates' });
});

app.use(function(request, response){
    response.sendStatus(404);  
});

var server = app.listen(8001, function(){
    var port = server.address().port;
    console.log("Server is running at http://localhost:%s", port);
});