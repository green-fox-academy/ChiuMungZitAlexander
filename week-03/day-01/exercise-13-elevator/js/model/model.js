'use strict';

function ElevatorModel(_maxFloor, _maxPeople) {
    this.people = 0;
    this.floor = 0;
    this.maxFloor = _maxFloor;
    this.maxPeople = _maxPeople;
    this.addPeople = function() {
        if (this.people !== this.maxPeople) {
            this.people++;
        }
    }
    this.removePeople = function() {
        if (this.people !== 0) {
            this.people--;
        }
    }
    this.up = function() {
        if (this.floor !== this.maxFloor - 1) {
            this.floor++;
        }
    }
    this.down = function() {
        if (this.floor !== 0) {
            this.floor--;
        }
    }
    this.getter = function() {
        let obj = {
            people: this.people,
            floor: this.floor
        }
        return obj;
    }
}
