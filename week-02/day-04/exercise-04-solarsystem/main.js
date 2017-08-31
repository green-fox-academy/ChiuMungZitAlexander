'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// bonus for using some built in methods

var planetList = ["Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"];

for (let index in planetList) {
    if (planetList[index] === "Jupiter") {
        planetList.splice(index, 0, "Saturn");
        break;
    }
}

console.log(planetList);