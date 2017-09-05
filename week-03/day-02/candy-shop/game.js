/* Gather 10.000 candies!
Clicking the ‘Create candies’ button gives you 1 candy.
You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
10 lollipops generate 1 candy per second.
Use the 🍭 emoji to display the lollipops you have
Display the candy production rate in the Candies / Second row
If you press the "make candy rain" button, the candy generation should speed up 10x */

var condition = {
    lollipops: 10,
    candyGeneration: 0, // per second
    candyGenerationTime: 1,
    candies: 0
}

window.onload = function() {
    updateCondition();
    setInterval(function() {
        condition.candies += condition.candyGeneration;
        updateCondition();
    }, 1000);
}

var candiesDOM = document.querySelector(".candies");
var lollypopsDOM = document.querySelector(".lollypops");
var speedDOM = document.querySelector(".speed");

function createCandies() {
    condition.candies++;
    updateCondition();
}

function buyLollipop() {
    if (condition.candies >= 100) {
        condition.candies -= 100;
        condition.lollipops++;
        updateCondition();
    }
}

function candyRain() {
    condition.candyGenerationTime *= 10;
    updateCondition();
}

function updateCondition() {
    condition.candyGeneration = Math.floor(condition.lollipops / 10) * condition.candyGenerationTime;
    candiesDOM.innerHTML = condition.candies;
    lollypopsDOM.innerHTML = "🍭".repeat(condition.lollipops);
    speedDOM.innerHTML = condition.candyGeneration;
}