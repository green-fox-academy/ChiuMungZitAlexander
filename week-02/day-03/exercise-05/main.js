'use strict'

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
var i = 0
while (i++ < 100) {
    if (!(i % 15)) {
        console.log("FizzBuzz")
    } else if (!(i % 5)) {
        console.log("Buzz")
    } else if (!(i % 3)) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}