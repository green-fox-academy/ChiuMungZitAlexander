'use strict'

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(para) {
    for (let item of arguments) {
        console.log(item)
    }
}

printer(1,2,3)