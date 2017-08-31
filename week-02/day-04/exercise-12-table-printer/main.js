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
    var len = 0; // LENGTH OF FIRST COLUMN
}