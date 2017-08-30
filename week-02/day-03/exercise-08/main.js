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
    var arr = new Array(lineCount - 1)
    arr.fill(" ")
    arr[lineCount / 2 - 1] = "*"
    for (let i = 0; i <= lineCount / 2 - 1; i++) {
        arr[lineCount / 2 - 1 + i] = "*"
        arr[lineCount / 2 - 1 - i] = "*"
        console.log(arr.join(""))
    }
    console.log(arr.join(""))
    for (let i = 0; i < lineCount / 2 - 1; i++) {
        arr[i] = " "
        arr[lineCount - 2 - i] = " "
        console.log(arr.join(""))
    }
} else {
    var arr = new Array(lineCount++)
    arr.fill(" ")
    arr[lineCount / 2 - 1] = "*"
    for (let i = 0; i <= lineCount / 2 - 1; i++) {
        arr[lineCount / 2 - 1 + i] = "*"
        arr[lineCount / 2 - 1 - i] = "*"
        console.log(arr.join(""))
    }
    for (let i = 0; i < lineCount / 2 - 1; i++) {
        arr[i] = " "
        arr[lineCount - 2 - i] = " "
        console.log(arr.join(""))
    }
}
