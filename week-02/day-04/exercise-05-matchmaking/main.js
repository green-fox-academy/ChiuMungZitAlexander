'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

girls.forEach(function(value, index, arrya) {
    order.push(value);
    order.push(boys[index])
})

console.log(order);