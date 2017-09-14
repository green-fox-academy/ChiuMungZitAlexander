'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/reddit';

function connectMongo(operation, parameters, callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
            throw err;
        }
        console.log('Connection established to ' + url);
        operation(db, parameters, callback);
    });
}

module.exports = connectMongo;