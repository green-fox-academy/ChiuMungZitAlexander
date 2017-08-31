'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [
	{ 'vodka': 1, 'needs_cooling': true },
	{ 'coffee_liqueur': 0, 'needs_cooling': true },
	{ 'fresh_cream': 1, 'needs_cooling': true },
	{ 'captain_morgan_rum': 2, 'needs_cooling': true },
	{ 'mint_leaves': 0, 'needs_cooling': false },
	{ 'sugar': 100, 'needs_cooling': false },
	{ 'lime juice': 10, 'needs_cooling': true },
	{ 'soda': 100, 'needs_cooling': true }
];

function print() {
	// CONFIRM THE FIRST COLUMN LENGTH
	var len = 12;
	var ing = []
	ingredients.forEach(function(obj) {
		for (let key in obj) {
			key.length >= len ? len = key.length : "";
			ing.push(key);
			obj[key] === 0 ? obj[key] = "-" : "";
			break;
		}
	}, this);
	len += 2;

	// PRINT
	var str = "+" + "-".repeat(len) + "+" + "-".repeat(15) + "+" + "-".repeat(10) + "+";
	console.log(str);
	console.log("| Ingredient " + " ".repeat(len - 12) + "| Needs cooling | In stock |");
	console.log(str);
	ingredients.forEach(function(obj, index, array) {
		if (obj.needs_cooling) {
			console.log("| " + ing[index] + " ".repeat(18 - ing[index].length) + " | " + "Yes" + " ".repeat(11) + "| " + obj[ing[index]] + " ".repeat(9 - String(obj[ing[index]]).length) + "|");
		} else {
			console.log("| " + ing[index] + " ".repeat(18 - ing[index].length) + " | " + "NO" + " ".repeat(12) + "| " + String(obj[ing[index]]) + " ".repeat(9 - String(obj[ing[index]]).length) + "|");
		}
	}, this);
	console.log(str);
}

print();