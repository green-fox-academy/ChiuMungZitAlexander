'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    updateUsername(db, 'John Doe');
});

var updateUsername = function (db, name) {
    var collection = db.collection('students');
    var query = {
        'name': name
    }
    var modify = {
        $set: {
            'github': 'johndoe'
        }
    }
    collection.updateOne(query, modify,  function (err, result) {
        if (err) {
            throw err
        } else {
            console.log('Update username successfully.');
            updateMyAge(db, 26);
        }
    })
}

var updateMyAge = function (db, age) {
    var collection = db.collection('students');
    var query = {
        'name': 'Alexander Zhao'
    }
    var modify = {
        $set: {
            'age': age
        }
    }
    collection.updateOne(query, modify, function (err, result) {
        if (err) {
            throw err
        } else {
            console.log('Update age Successful.');
            db.close();
        }
    })
}