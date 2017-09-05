'use strict';

var fruits = [
    'melon',
    'apple',
    'strawberry',
    'blueberry',
    'pear',
    'banana'
];

var howManyE = fruits.map(countLetter);

function countLetter(string, index, array) {
    return string.split("").reduce(function(count, letter) {
        if (letter === "e") {
            return ++count;
        } else {
            return count;
        }
    }, 0);
}

console.log(howManyE);
