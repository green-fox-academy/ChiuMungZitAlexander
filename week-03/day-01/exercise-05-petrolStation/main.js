'use strict';

var car = {
    petrolLevel: 15,
    petrolCapacity: 50,
    refill: function(amount) {
        amount = this.petrolCapacity - this.petrolLevel;
        this.petrolLevel = this.petrolCapacity;
        return amount;
    }
}

var station = {
    petrolStorage: 3000,
    provide: function(car) {
        this.petrolStorage -= car.refill();
    }
}

console.log(car.petrolLevel);
console.log(station.petrolStorage);

station.provide(car);

console.log(car.petrolLevel);
console.log(station.petrolStorage);