'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function name(arr) {
    var str = "";
    arr.forEach(function(obj) {
        obj.candies > 4 ? str += obj.name + " " : "";
    }, this);
    if (str) {
        return str
    } else {
        return "Nobody "
    }
}

function avg(arr) {
    var sum = 0;
    arr.forEach(function(obj) {
        sum += obj.candies;
    }, this);
    return sum / arr.length
}

console.log(name(students) + "have more than 4 candies.");
console.log(avg(students) + " candies they have on average.");
