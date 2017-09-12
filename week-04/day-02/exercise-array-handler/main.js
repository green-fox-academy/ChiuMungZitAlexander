'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/arrays', function (req, res) {
    if (!req.body.what || !req.body.numbers) {
        var responseBody = {
            "error": "Please provide what to do with the numbers!"
        }
        res.send(responseBody);
    } else {
        var result = methods[req.body.what](req.body.numbers);
        var responseBody = {
            "result": result
        }
        res.send(responseBody);
    }
});

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});

var methods = {
    "sum": function (array) {
        let sum = 0;
        array.forEach(function(num) {
            sum += num;
        }, this);
        return sum;
    },
    "multiply": function (array) {
        let multiply = 1;
        array.forEach(function(num) {
            multiply *= num;
        }, this);
        return multiply;
    },
    "double": function (array) {
        array = array.map(function(num) {
            return num * 2;
        })
        return array;
    }
}