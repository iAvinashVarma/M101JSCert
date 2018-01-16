var express = require('express');
var app = express();
var cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.use(app.router);

// Handle for internal server errors.
function errorHandler(error, request, response, next){
    console.error(error.message);
    console.error(error.stack);
    response.status(500);
    response.render('error_template', { error: error });
}

app.use(errorHandler);

app.get('/:name', function(request, response, next){
    var name = request.params.name;
    var getvar1 = request.query.getvar1;
    var getvar2 = request.query.getvar2;
    response.render('hello', { name: name, getvar1: getvar1, getvar2: getvar2})
});

app.listen(3000);
console.log("Express server listening on port 8003");