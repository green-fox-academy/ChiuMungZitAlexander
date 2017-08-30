'use strict'

// - Create a variable named `af` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `af` to the console*
// *hint: use a loop, console.log(af) won't cut it
// - bonus for using the correct built in array method

var af = [4, 5, 6, 7]

af.forEach(function(element) {
    console.log(element)
}, this)