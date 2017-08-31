// 1
console.log("----------1----------");
console.log(document.querySelector("#b325").innerHTML);

// 2
console.log("----------2----------");
console.log(document.querySelector(".b326").innerHTML);

// 3
console.log("----------3----------");
var businessLamp = document.querySelectorAll(".big");
businessLamp.forEach(function(dom) {
	console.log(dom.innerHTML);
}, this);

// 4
console.log("----------4----------");
var conceitedKing = document.querySelectorAll(".container div");
conceitedKing.forEach(function(dom) {
	console.log(dom.innerHTML);
}, this);

// 5
console.log("----------5----------");
var noBusiness = document.querySelectorAll("div");
noBusiness.forEach(function(dom) {
	console.log(dom.innerHTML);
}, this);

// 6
var allBizniss = document.querySelector("p");
alert(allBizniss.innerHTML);