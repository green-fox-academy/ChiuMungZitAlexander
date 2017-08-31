'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

var numbers = [1,2,3,4,5,6,8];

if (numbers.some(function(value, index, array) {
    return value === 7
})) {
    console.log("Hoorray");
} else {
    console.log("Noooooo");
}
