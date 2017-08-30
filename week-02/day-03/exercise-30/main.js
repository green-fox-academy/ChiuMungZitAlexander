'use strict'

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

var aj = [3, 4, 5, 6, 7]

// SOLUTION 1
console.log("----------SOLUTION-1----------")
aj.reverse()
aj.forEach(function(element) {
    console.log(element)
}, this)

// SOLUTION 2
console.log("----------SOLUTION-2----------")
var aj = [3, 4, 5, 6, 7]
aj = aj.map(function(value, index, array) {
    return array[array.length - 1 - index]
})
aj.forEach(function(element) {
    console.log(element)
}, this)

// SOLUTION 3
console.log("----------SOLUTION-3----------")
var aj = [3, 4, 5, 6, 7]
var temp = []
while (aj.length) {
    temp[temp.length] = aj[aj.length - 1]
    aj.length--
}
aj = temp
aj.forEach(function(element) {
    console.log(element)
}, this)
