'use strict'

var lineCount = 10

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

var arr = new Array(lineCount)

for (let i = 1; i <= lineCount; i++) {
    if (i === 1 || i === lineCount) {
        console.log(arr.fill("%").join(""))
    } else {
        arr.fill(" ")
        arr[0] = "%"
        arr[lineCount - 1] = "%"
        console.log(arr.join(""))
    }
}