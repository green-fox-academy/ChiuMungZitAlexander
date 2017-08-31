document.querySelector(".asteroids").removeChild(document.querySelector("li"));

var dom = document.createElement("li");
dom.innerHTML = "The Fox";

var dom2 = dom.cloneNode(true);
var dom3 = dom.cloneNode(true);

document.querySelector(".asteroids").append(dom, dom2, dom3);
// document.querySelector(".asteroids").appendChild(dom);
