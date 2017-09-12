'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/arrays', function (req, res) {
    if (!req.body.text || req.body.text === '') {
        var responseBody = {
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
        }
        res.send(responseBody);
    } else {
        var result = reverseSith(req.body.text);
        var responseBody = {
            "sith_text": result
        }
        res.send(responseBody);
    }
});

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});

function reverseSith(str) {
    var sentences = str.split('.');
    sentences.length = sentences.length - 1;
    for (let item of sentences) {
        item.replace(/(^\s*)|(\s*$)/g, "");
        console.log(item);
    }

}
reverseSith("This is my example sentence. Just for fun.");