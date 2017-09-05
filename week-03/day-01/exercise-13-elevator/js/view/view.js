'use strict';

window.onload = function() {
    createDiv(maxFloor);
    active();
}

var floorDOM = document.querySelector(".floor");
function createDiv(maxFloor) {
    for (let i = 0; i < maxFloor; i++) {
        let dom = document.createElement("div");
        dom.id = "floor" + (maxFloor - i - 1);
        dom.style.height = (330 - 2 * maxFloor) / maxFloor + "px";
        dom.style.fontSize = String(parseInt(dom.style.height) * 0.8) + "px";
        floorDOM.appendChild(dom);
    }
}

function active() {
    let currentP = getElevatorModel().people;
    let currentF = getElevatorModel().floor;
    let str = "floor" + currentF;
    let domArr = document.querySelectorAll("main .floor div");
    domArr.forEach(function(dom) {
        dom.className = "";
        dom.innerHTML = "";
    }, this);
    document.getElementById(str).className = "active";
    document.querySelector(".active").innerHTML = currentP;
}