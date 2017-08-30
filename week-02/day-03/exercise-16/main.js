'use strict'

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(para) {
    if (para ===  1) {
        return 1
    } else {
        return para * factorio(--para)
    }
}

console.log(factorio(5))