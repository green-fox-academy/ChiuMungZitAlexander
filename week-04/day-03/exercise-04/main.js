'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    deleteUser(db, 'John Doe');
});

var deleteUser = function (db, name) {
    var collection = db.collection('students');
    var query = {
        'name': name
    }
    collection.removeOne(query, function (err, result) {
        if (err) {
            throw err
        } else {
            console.log('Delete Successful.');
            db.close();
        }
    })
}