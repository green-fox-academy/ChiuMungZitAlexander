const maxFloor = 8; // ANY VALUE, FLOOR DIVs WILL BE AUTOMATICALLY FILLED
const maxPeople = 13; // ANY VALUE

var elevatorModel = new ElevatorModel(maxFloor, maxPeople);
var floorDOM = document.querySelector(".floor");

window.onload = function() {
    createDiv(maxFloor);
    active();
}

function createDiv(maxFloor) {
    for (let i = 0; i < maxFloor; i++) {
        let dom = document.createElement("div");
        dom.id = "floor" + (maxFloor - i - 1);
        dom.style.height = (330 - 2 * maxFloor) / maxFloor + "px";
        dom.style.fontSize = String(parseInt(dom.style.height) * 0.8) + "px";
        floorDOM.appendChild(dom);
    }
}

function up() {
    elevatorModel.up();
    active();
}

function down() {
    elevatorModel.down();
    active();
}

function add() {
    elevatorModel.addPeople();
    active();
}

function remove() {
    elevatorModel.removePeople();
    active();
}

function active() {
    let currentP = elevatorModel.getter().people;
    let currentF = elevatorModel.getter().floor;
    let str = "floor" + currentF;
    let domArr = document.querySelectorAll("main .floor div");
    domArr.forEach(function(dom) {
        dom.className = "";
        dom.innerHTML = "";
    }, this);
    document.getElementById(str).className = "active";
    document.querySelector(".active").innerHTML = currentP;
}