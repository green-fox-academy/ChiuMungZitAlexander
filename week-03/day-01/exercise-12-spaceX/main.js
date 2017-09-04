var falcon1 = new Rocket('falcon1')
var returned_falcon9 = new Rocket('falcon9', 11, 1)

falcon1.refill() // 5
falcon1.launch()

console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1
var space_x = new SpaceX(100)
var falcon1 = new Rocket('falcon1', 0, 0)
var falcon9 = new Rocket('falcon9', 0, 0)
var returned_falcon9 = new Rocket('falcon9', 11, 1)

console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11

space_x.addRocket(falcon1)
space_x.addRocket(falcon9)
space_x.addRocket(returned_falcon9)

console.log(space_x.getStats()) // rockets: 3, fuel: 100, launches: 1
space_x.refillAll()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 1
space_x.launchAll()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 4
space_x.buyFuel(50)
console.log(space_x.getStats()) // rockets: 3, fuel: 116, launches: 4

/* ROCKET CLASS */
function Rocket(_type, _startingFuel, _launches) {
    this.type = _type;
    this.startingFuel = _startingFuel || 0;
    this.launches = _launches || 0;
    this.launch = function() {
        let consumingFuel = 0;
        if (this.type === "falcon1") {
            consumingFuel = 1;
        } else {
            consumingFuel = 9;
        }
        if (this.startingFuel >= consumingFuel) {
            this.launches++;
            this.startingFuel -= consumingFuel;
        }
    }
    this.refill = function() {
        let amount = 0;
        if (this.type === "falcon1") {
            amount = 5 - this.startingFuel;
            this.startingFuel = 5;
        } else {
            amount = 20 - this.startingFuel;
            this.startingFuel = 20;
        }
        return amount;
    }
    this.getStats = function() {
        return "name: " + this.type + ", " + "fuel: " + this.startingFuel + " ," + "launches: " + this.launches;
    }
}

/* SPACEX CLASS */
function SpaceX(_storedFuel) {
    this.storedFuel = _storedFuel;
    this.rockets = [];
    this.addRocket = function(rocket) {
        this.rockets.push(rocket);
    }
    this.refillAll = function() {
        this.rockets.forEach(function(rocketObj) {
            this.storedFuel -= rocketObj.refill();
        }, this);
    }
    this.launchAll = function() {
        this.rockets.forEach(function(rocketObj) {
            rocketObj.launch();
        }, this);
    }
    this.buyFuel = function(amount) {
        this.storedFuel += amount;
    }
    this.getStats = function() {
        let launchesSum = 0;
        this.rockets.forEach(function(rocketObj) {
            launchesSum += rocketObj.launches;
        }, this);
        return "rockets: " + this.rockets.length + ", fuel: " + this.storedFuel + ", launches: " + launchesSum;
    }
}