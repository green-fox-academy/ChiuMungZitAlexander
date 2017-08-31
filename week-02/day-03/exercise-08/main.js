'use strict'

var lineCount = 7



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

if (!(lineCount % 2)) {
    var i = lineCount / 2
    while (i--) {
        console.log(" ".repeat(i) + "*".repeat(lineCount - 2 * i - 1) + " ".repeat(i))
    }
    while (i++ < (lineCount / 2 - 1)) {
        console.log(" ".repeat(i) + "*".repeat(lineCount - 2 * i - 1) + " ".repeat(i))
    }
} else {
    var i = (lineCount - 1) / 2
    for (let j = i; Math.abs(j) <= i; j--) {
        console.log(" ".repeat(Math.abs(j)) + "*".repeat(lineCount - Math.abs(j) - Math.abs(j)) + " ".repeat(Math.abs(j)))
    }
}
