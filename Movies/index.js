var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

MongoClient.connect('mongodb://localhost', function(err, client){
    if(err) throw err;

    var db = client.db('video');

    // Find some documents in our collection.
    db.collection('movies').find({}).toArray(function(err, docs){
        if(err) throw err; 
        // Print the title of the each document in the result set.
        docs.forEach(function(doc){
            console.log(doc);
        });
    });

    console.log("Called find()");
});