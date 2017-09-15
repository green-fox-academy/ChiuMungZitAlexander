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

app.put('/posts/:id', function (req, res) {
    if (!req.params.id) {
        throw 'Error, no id';
    } else {
        let modifyCondition = {
            query: {
                '_id': req.params.id
            },
            modification: {
                $set: {
                    title: req.body.title,
                    href: req.body.href
                }
            }
        }
        connectMongo(dbOperation.modifyPost, modifyCondition, function (responseBody) {
            res.send(responseBody);
        });
    }
})

app.post('/users', function (req, res) {
    if (!req.body) {
        throw 'Error, no request body';
    } else {
        let accountAndPassword = req.body;
        connectMongo(dbOperation.queryUser, accountAndPassword, function (responseBody) {
            res.send(responseBody);
        });
    }
})

app.put('/posts/:id/upvote', function (req, res) {
    if (!req.params.id) {
        throw 'Error, no id';
    } else {
        let upVoteCondition = {
            id: req.params.id,
            vote: 1
        }
        connectMongo(dbOperation.upVote, upVoteCondition, function (responseBody) {
            res.send(responseBody);
        });
    }
});

app.put('/posts/:id/downvote', function (req, res) {
    if (!req.params.id) {
        throw 'Error, no id';
    } else {
        let downVoteCondition = {
            id: req.params.id,
            vote: -1
        }
        connectMongo(dbOperation.downVote, downVoteCondition, function (responseBody) {
            res.send(responseBody);
        });
    }
});

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});