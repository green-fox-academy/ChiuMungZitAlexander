'use strict';

var pirates = [
  {name: 'Jack', gold: 4, hasWoodenLeg: true},
  {name: 'Bob', gold: 0, hasWoodenLeg: false},
  {name: 'Olaf', gold: 3, hasWoodenLeg: true},
  {name: 'Steve', gold: 2, hasWoodenLeg: true},
  {name: 'Ian', gold: 10, hasWoodenLeg: false},
];

var pirateHorde = new PirateHorde(pirates);

pirateHorde.addPirate('Greg', 6, true);
console.log(pirateHorde.getSumGold()); // 25
console.log(pirateHorde.getLongestName()); // 'Steve'
console.log(pirateHorde.getTheWoodenLegNames()); // ['Jack', 'Olaf', 'Steve', 'Greg']

function PirateHorde(_pirates) {
    this.pirates = _pirates;
    this.addPirate = function(_name, _gold, _hasWoodenLeg) {
        let piratesObj = {
            name: _name,
            gold: _gold,
            hasWoodenLeg: _hasWoodenLeg
        }
        this.pirates.push(piratesObj);
    }
    this.getSumGold = function() {
        let sum = 0;
        this.pirates.forEach(function(piratesObj) {
            sum += piratesObj.gold;
        }, this);
        return sum;
    }
    this.getLongestName = function() {
        let longestName = "";
        let length = 0;
        this.pirates.forEach(function(piratesObj) {
            if (piratesObj.name.length >= length) {
                length = piratesObj.name.length;
                longestName = piratesObj.name;
            }
        }, this);
        return longestName;
    }
    this.getTheWoodenLegNames = function() {
        let str = "Wooden Legger: ";
        let arr = [];
        this.pirates.forEach(function(piratesObj) {
            if (piratesObj.hasWoodenLeg) {
                arr.push(piratesObj.name);
            }
        }, this);
        return str + arr.join(",");
    }
}