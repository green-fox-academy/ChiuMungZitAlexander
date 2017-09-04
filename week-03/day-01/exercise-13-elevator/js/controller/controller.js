'use strict';

const maxFloor = 8; // ANY VALUE, FLOOR DIVs WILL BE AUTOMATICALLY FILLED
const maxPeople = 13; // ANY VALUE

var elevatorModel = new ElevatorModel(maxFloor, maxPeople);

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

function getElevatorModel() {
    return elevatorModel.getter();
}
