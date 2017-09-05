'use strict';

function factorialTillLimitWithCallback(limit, callback) {
    var factorial = 1;
    for (var i = 1; i <= limit; ++i) {
        factorial *= i;
        callback(factorial);
    }
}

function printFactorialNumbers(num) {
    console.log(num);
}

factorialTillLimitWithCallback(20, printFactorialNumbers);
