'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function (req, res) {
    if (!req.query.input) {
        var responseBody = {
            "error": "Please provide an input!"
        }
        res.send(responseBody);
    } else {
        var input = parseInt(req.query.input, 10);
        var responseBody = {
            "received": input,
            "result": input * 2
        }
        res.send(responseBody);
    }
});

app.get('/greeter', function (req, res) {
    if (JSON.stringify(req.query) === '{}') {
        var responseBody = {
            "error": "Please provide a name!"
        }
        res.send(responseBody);
    } else if (!req.query.title) {
        var responseBody = {
            "error": "Please provide a title!"
        }
        res.send(responseBody);
    } else {
        var responseBody = {
            "welcome_message": "Oh, hi there petike, my dear student!"
        }
        res.send(responseBody);
    }
});

app.get('/appenda*', function (req, res) {
    if (req.path === '/appenda') {
        res.sendStatus(404);
    } else {
        var subPath = req.path.slice(9);
        var responseBody = {
            "appended": subPath + 'a'
        }
        res.send(responseBody);
    }
});

app.post('/dountil*', function (req, res) {
    function sum (num) {
        if (num >= 1) {
            return num += sum(--num);
        } else {
            return 0;
        }
    }
    function factorial (num) {
        if (num >= 1) {
            return num *= factorial(--num);
        } else {
            return 1;
        }
    }
    if (!req.body.until) {
        var responseBody = {
            "error": "Please provide a number!"
        }
        res.send(responseBody);
    } else {
        var num = req.body.until;
        var method = req.path.slice(9);
        var result;
        if (method === 'sum') {
            result = sum(num);
        } else if (method === 'factor') {
            result = factorial(num);
        }
        var responseBody = {
            "result": result
        }
        res.send(responseBody);
    }
});

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});