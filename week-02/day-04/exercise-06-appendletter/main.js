'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];

far = far.map(function(value, index, array) {
    return value + "e"
}, this)

console.log(far);