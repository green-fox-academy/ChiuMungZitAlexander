'use strict';

function CarStore(_cars) {
    this.cars = _cars;
    this.addCar = function(_type, _price, _year) {
        let carObj = {
            type: _type,
            price: _price,
            year: _year
        }
        this.cars.push(carObj);
    }
    this.getSumPrice = function() {
        let sum = 0;
        this.cars.forEach(function(carObj) {
            sum += carObj.price;
        }, this);
        return sum;
    }
    this.getOldestCarType = function() {
        let date = new Date();
        let oldestYear = date.getFullYear();
        let oldestType = "";
        this.cars.forEach(function(carObj) {
            if (carObj.year <= oldestYear) {
                oldestYear = carObj.year;
                oldestType = carObj.type;
            }
        }, this);
        return oldestType;
    }
    this.deleteCarByType = function(_type) {
        function match(carObj) {
            return carObj.type !== _type;
        }
        this.cars = this.cars.filter(match);
    }
}





var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000