'use strict';

var shop_items = ["Cupcake", 2, "Brownie", false]

// Accidentally we added "2" and "false" to the array. 
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)

for (let index in shop_items) {
    if (shop_items[index] === 2) {
        shop_items[index] = "Croissant";
    }
    if (!shop_items[index]) {
        shop_items[index] = "Ice cream";
    }
}

console.log(shop_items);