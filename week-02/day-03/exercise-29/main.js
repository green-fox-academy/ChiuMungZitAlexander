'use strict'

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var n = 4

var arr = new Array(n)
arr.fill(0)

while(n--) {
    arr[n] = 1
    console.log(arr.join(" "))
    arr[n] = 0
}