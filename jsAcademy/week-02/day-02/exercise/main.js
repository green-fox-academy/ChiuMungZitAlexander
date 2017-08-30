'use strict'

// EXERCISE_01_HELLO_ME
console.log("Hello, Alexander!")
console.log("------------------------------------------------------")

// EXERCISE_02_HUMPTY_DUMPTY
console.log('Humpty Dumpty sat on a wall,')
console.log('Humpty Dumpty had a great fall.')
console.log('All the king\'s horses and all the king\'s men')
console.log('Couldn\'t put Humpty together again.')
console.log("------------------------------------------------------")

// EXERCISE_03_HELLO_OTHERS
console.log("Hello, Chase!")
console.log("Hello, Zoe!")
console.log("Hello, Alfred!")
console.log("------------------------------------------------------")

// EXERCISE_04_INTRODUCE_YOURSELF
console.log("Alexander Zhao")
console.log("26")
console.log("1.72")
console.log("------------------------------------------------------")

// EXERCISE_05_TWO_NUMBERS
console.log(22 + 13)
console.log(22 - 13)
console.log(13 * 22)
console.log(22 / 13)
console.log(22 % 13)
console.log("------------------------------------------------------")

// EXERCISE_06_CODING_HOURS
console.log(6 * 5 * 17)
console.log(Math.round(6 * 5 / 52 * 10000) / 100 + "%")
console.log("------------------------------------------------------")

// EXERCISE_07_FAVORITE_NUMBER
var favoriteNumber = 3
console.log("My favorite number is: ", favoriteNumber)
console.log("------------------------------------------------------")

// EXERCISE_08_SWAP
var a = 123
var b = 526
var temp = a
a = b
b = temp
console.log(a)
console.log(b)
console.log("------------------------------------------------------")

// EXERCISE_09_BMI
var massInKg = 81.2
var heightInM = 1.78
console.log(massInKg / (heightInM * heightInM))
console.log("------------------------------------------------------")

// EXERCISE_10_DEFINE_BASIC_INFO
var name = "AlexanderZhao"
var age = 26
var height = 1.72
var marriedOrNot = false
console.log("NAME:", name, "AGE:", age, "HEIGHT:", height, "MARRIEDORNOT:", marriedOrNot)
console.log("------------------------------------------------------")

// EXERCISE_11_VARIABLE_MUTATION
var a = 3
// make it bigger by 10
a += 10
console.log(a)

var b = 100
// make it smaller by 7
b -= 7
console.log(b)

var c = 44
// double c's value
c *= 2
console.log(c)

var d = 125
// divide d's value by 5
d /= 5
console.log(d)

var e = 8
// what's the cube of e's value?
e *= e * e
console.log(e)

var f1 = 123
var f2 = 345
// tell if f1 is bigger than f2 (as a boolean)
console.log(f1 > f2)
var g1 = 350;
var g2 = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
console.log(g2 * 2 > g1)

var h = 1357988018575474
// tell if h has 11 as a divisor (as a boolean)
console.log(!(h % 11))
var i1 = 10
var i2 = 3
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i1 > i2 * i2 && i1 < i2 * i2 * i2)
var j = 1521
// tell if j is dividable by 3 or 5 (as a boolean)
console.log(!(j % 3) && !(j % 5))
var k = 'Apple'
// fill the k variable with its content 4 times
k += k + k + k + k
console.log(k)
console.log("------------------------------------------------------")

// EXERCISE_12_CUBOID
var sideX = 10
var sideY = 20
var sideZ = 30
console.log("Surface Area:", (sideX * sideY + sideX * sideZ + sideY * sideZ) * 2)
console.log("Volume:", sideX * sideY * sideZ)
console.log("------------------------------------------------------")

// EXERCISE_13_SECONDS_IN_A_DAY
var currentHours = 14
var currentMinutes = 34
var currentSeconds = 42
console.log("Seconds remaining:", 86400 - currentHours * 3600 - currentMinutes * 60 - currentSeconds)