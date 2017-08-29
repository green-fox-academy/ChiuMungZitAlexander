'use strict'

var a = 24
var out = 0
// if a is even increment out by one
!(a % 2) ? out++ : out
console.log(out)
console.log("------------------------------------------------------")

var b = 13
var out2 = ''
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "More!",
// if more than 20 set out2 to "Less!"
b >= 10 && b <= 20 ? out2 = "Sweet!" : out2
b > 20 ? out2 = "More!" : out2
b < 10 ? out2 = "Less!" : out2
console.log(out2)
console.log("------------------------------------------------------")

var c = 123
var credits = 100
var isBonus = false
// if credits are at least 50,
// and isBonus is false decrement c by 2
// if credits are smaller than 50,
// and isBonus is false decrement c by 1
// if isBonus is true c should remain the same
credits >= 50 && !isBonus ? c -= 2 : c
credits < 50 && !isBonus ? c-- : c
console.log(c)
console.log("------------------------------------------------------")

var d = 8
var time = 120
var out3 = ''
// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
!(d % 4) && time <= 200 ? out3 = "check" : out3
time > 200 ? out3 = "Time out" : out3
console.log(out3)