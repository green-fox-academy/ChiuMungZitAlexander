'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function countCandies(arr) {
    var sum = 0;
    arr.forEach(function(obj) {
        sum += obj.candies;
    }, this);
    return sum
}

function ageSum(arr) {
    var age = 0;
    arr.forEach(function(obj) {
        obj.candies < 5 ? age += obj.age : "";
    }, this);
    return age
}

console.log(countCandies(students) + " candies are owned by students.");
console.log("Sum of the age of those who have less than 5 candies is " + ageSum(students));