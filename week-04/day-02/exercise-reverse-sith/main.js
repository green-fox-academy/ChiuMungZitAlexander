'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sith', function (req, res) {
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
    let sentences = str.split('.');
    sentences.length = sentences.length - 1; // ["This is...", " Just for..."]
    for (let index in sentences) {
        sentences[index] = trim(sentences[index]);
        let wordArray = sentences[index].split(' ');
        wordArray[0] = wordArray[0].toLowerCase();
        for (let index in wordArray) {
            if (index % 2 === 1) {
                let temp = wordArray[index];
                wordArray[index] = wordArray[index - 1];
                wordArray[index - 1] = temp;
            }
        }
        let firstLetter = wordArray[0][0].toUpperCase();
        wordArray[0] = firstLetter + wordArray[0].slice(1);
        sentences[index] = wordArray.join(' ');
    }
    return trim(sentences.join('. ' + randomWord() + ' ') + '. ' + randomWord());
}

function trim(str) {
    return str.replace(/^\s+|\s+$/gm, '');
}

var randomWordArray = ['Arrgh', 'Uhmm', 'Homey', 'Hmmm', 'Joooooodie'];
function randomWord() {
    if (Math.round(Math.random()) === 1) {
        return randomWordArray[Math.round(Math.random() * (randomWordArray.length - 1))] + '.';
    } else {
        return randomWordArray[Math.round(Math.random() * (randomWordArray.length - 1))] + '. ' + randomWordArray[Math.round(Math.random() * (randomWordArray.length - 1))] + '.';
    }
}

reverseSith("This is my example sentence. Just for fun.");