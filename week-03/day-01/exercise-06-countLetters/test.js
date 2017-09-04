const test = require('tape');
const countLetter = require('./main.js');

test('count letter test', function (t) {
    t.plan(3);

    t.equal(1, countLetter("abc", "a"));
    t.equal(4, countLetter("pineapple apple pen", "e"));
    t.equal(0, countLetter("a", ""));
});
