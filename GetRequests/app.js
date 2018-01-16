var express = require('express');
var app = express();
var cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

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
    var getVarOne = request.query.getvar1;
    var getVarTwo = request.query.getvar2;
    response.render('hello', { name: name, getvar1: getVarOne, getvar2: getVarTwo})
});

app.listen(8003);
console.log("Express server listening on port 8003");