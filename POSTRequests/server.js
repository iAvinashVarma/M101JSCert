var express = require('express');
var app = express();
var cons = require('consolidate');
var bodyParser = require('body-parser');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");
// for parsing application / x - www - form - urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Handler for internal server errors.
function errorHandler(error, request, response, next){
    console.error(error.message);
    console.error(error.stack);
    response.status(500);
    response.render('error', { error: error });    
}

app.use(errorHandler);

app.get('/', function(request, response, next){
    response.render('fruitPicker', { 'fruits' : [ 'apple', 'orange', 'banana', 'peach' ] });
});

app.post('/favorite_fruit', function(request, response, next) {
    var favorite = request.body.fruit;
    if(typeof favorite == 'undefined'){
        next(Error('Please choose a fruit!'));
    } else {
        response.send('Your favorite fruit is ' + favorite);
    }
});

app.listen(8004);
console.log('Express server listening on port 8004');