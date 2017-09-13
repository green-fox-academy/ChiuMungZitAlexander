'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var fs = require('fs');

var students;
fs.readFile('./student.json', function (err, data) {
    if (err) {
        throw err;
    } else {
        students = JSON.parse(data);
        mongoConnect();
    }
})

var url = 'mongodb://localhost:27017/epam';

function mongoConnect() {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        console.log('Connection established to ' + url);
        dropAndInsertData(db, function (result) {
            console.log(result);
            db.close();
        });
    });

    var dropAndInsertData = function (db, callback) {
        var collection = db.collection('students');
        collection.remove();
        collection.insert(students, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }
}
