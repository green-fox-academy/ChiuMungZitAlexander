function Animal() {
    this.hungerV = 50;
    this.thirstV = 50;
    this.eat = function() {
        this.hungerV--;
    }
    this.drink = function() {
        this.thirstV--;
    }
    this.play = function() {
        this.hungerV++;
        this.thirstV++;
    }
}

function Farm() {
    this.animalList = [new Animal(), new Animal(), new Animal()];
    this.slots = 5;
    this.slots -= this.animalList.length;
    this.breed = function() {
        if (this.slots) {
            this.animalList.push(new Animal);
            console.log("Animal bred.");
            console.log(this.animalList);
        } else {
            console.log("No slots.");
        }
    }
    this.slaughter = function() {
        let leastHungery = 0;
        let leasHungeryIndex = 0;
        this.animalList.forEach(function(animalObj, index) {
            if (animalObj.hungerV >= leastHungery) {
                leastHungery = animalObj.hungerV;
                leasHungeryIndex = index;
            }
        }, this);
        this.animalList.splice(leasHungeryIndex, 1);
        console.log("Animal slaughtered.");
        console.log(this.animalList);
    }
}

var farm = new Farm();
farm.breed();
farm.slaughter();