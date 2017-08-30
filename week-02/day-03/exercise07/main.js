'use strict'

var lineCount = 4

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var star = "*"
while (lineCount--) {
    var i = lineCount
    var space = ""
    while (i--) {
        space += " "
    }
    console.log(space + star + space)
    star += "**"
}
