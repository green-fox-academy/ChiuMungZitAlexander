'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/epam';

app.get('/students', function (req, res) {
    
});

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});

function mongodbConnect () {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        console.log('Connection established to ' + url);
        db.close();
    });
}


