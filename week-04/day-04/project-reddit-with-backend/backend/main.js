'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var connectMongo = require('./connectMongo.js');
var dbOperation = require('./dbOperation.js');

app.use(express.static('../frontend'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/posts', function (req, res) {
    let query = {};
    connectMongo(dbOperation.queryPost, query, function (responseBody) {
        res.send(responseBody);
    });
});

app.post('/posts', function (req, res) {
    if (!req.body) {
        throw 'Error, no request body';
    } else {
        let postToInsert = req.body;
        connectMongo(dbOperation.insertPost, postToInsert, function (responseBody) {
            res.send(responseBody);
        });
    }
});

app.delete('/posts/:id', function (req, res) {
    if (!req.params.id) {
        throw 'Error, no id';
    } else {
        let deleteCondition = {
            '_id': req.params.id
        }
        connectMongo(dbOperation.deletePost, deleteCondition, function (responseBody) {
            res.send(responseBody);
        });
    }
})

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});