'use strict'

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var sideX = 10.5
var sideY = 20.25
var sideZ = 30.75
console.log("Surface Area:", Math.round((sideX * sideY + sideX * sideZ + sideY * sideZ) * 2))
console.log("Volume:", Math.round(sideX * sideY * sideZ))