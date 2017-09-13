'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';


MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    printMyInfo(db, 'Alexander Zhao');
});

var printMyInfo = function (db, name) {
    var collection = db.collection('students');
    var query = {
        'name': name
    }
    collection.find(query).toArray(function (err, result) {
        if (err) {
            throw err;
        } else {
            result.forEach(function(element) {
                for (let key in element) {
                    console.log(key + '\t' + element[key]);
                }
            }, this);
            console.log('---------------------------');
            printEveryUserName(db);
        }
    })
}

var printEveryUserName = function (db) {
    var collection = db.collection('students');
    var projection = {
        'github': 1,
        '_id': 0
    }
    collection.find({}, projection).toArray(function (err, result) {
        if (err) {
            throw err;
        } else {
            result.forEach(function(element) {
                console.log(element.github);
            }, this);
            console.log('---------------------------');
            printEveryNameExceptMe(db, 'Alexander Zhao');
        }
    })
}

var printEveryNameExceptMe = function (db, name) {
    var collection = db.collection('students');
    var query = {
        'name': {
            $ne: name
        }
    }
    var projection = {
        'name': 1,
        '_id': 0
    }
    collection.find(query, projection).toArray(function (err, result) {
        if (err) {
            throw err;
        } else {
            result.forEach(function(element) {
                console.log(element.name);
            }, this);
            console.log('---------------------------');
            printMalesOrFemales(db, 'female');
        }
    })
}

var printMalesOrFemales = function (db, gender) {
    var collection = db.collection('students');
    var query = {
        'gender': gender
    }
    var projection = {
        '_id': 0
    }
    collection.find(query, projection).toArray(function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(gender + ':');
            result.forEach(function(element) {
                console.log(element.name);
            }, this);
            console.log('---------------------------');
            db.close();
        }
    })
}