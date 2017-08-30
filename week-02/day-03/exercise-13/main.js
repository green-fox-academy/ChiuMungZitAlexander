'use strict'

// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var al = "EPAM"

function greet(para) {
    if (para) {
        return "Greetings, dear " + para
    } else {
        return "Greetings, dear Sir"
    }
}

console.log(greet(al))