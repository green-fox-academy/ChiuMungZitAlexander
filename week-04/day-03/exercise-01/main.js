'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var students = [
    {
        "name": "Alexander Zhao",
        "github": "ChiuMungZitAlexander",
        "gender": "male"
    },
    {
        "name": "Alfred Wei",
        "github": "AlfredWei0420",
        "gender": "male"
    },
    {
        "name": "Alice Shen",
        "github": "aliceshen227",
        "gender": "female"
    },
    {
        "name": "Chase Wang",
        "github": "chasssssse",
        "gender": "male"
    },
    {
        "name": "Chris Huang",
        "github": "ChrisH404",
        "gender": "male"
    },
    {
        "name": "Haochen Li",
        "github": "haochenli",
        "gender": "male"
    },
    {
        "name": "Jerry Liu",
        "github": "Jerry-ZWL",
        "gender": "male"
    },
    {
        "name": "Jessie Cai",
        "github": "ttttsai",
        "gender": "female"
    },
    {
        "name": "John Doe",
        "github": "janedoe",
        "gender": "male"
    },
    {
        "name": "Leo Lam",
        "github": "linjialiang1234",
        "gender": "male"
    },
    {
        "name": "Vinson Liu",
        "github": "sliu102",
        "gender": "male"
    },
    {
        "name": "Zhengnan Zhang",
        "github": "ZhengnanZhang",
        "gender": "male"
    },
    {
        "name": "Zoe Zhou",
        "github": "Zoe_Zhou",
        "gender": "male"
    }
]

var url = 'mongodb://localhost:27017/epam';


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