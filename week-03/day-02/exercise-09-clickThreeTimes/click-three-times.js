window.onload = function() {
    setTimeout(function() {
        condition.threeSeconds = true;
        checkCondition();
    }, 5000);
}

var domP = document.createElement("p");
domP.innerHTML = "5 seconds elapsed and clicked 3 times";
var domBody = document.querySelector("body");

function addClick() {
    condition.clickTimes++;
    checkCondition();
}

function checkCondition() {
    if (condition.threeSeconds && condition.clickTimes >= 3) {
        domBody.appendChild(domP);
    }
}

var condition = {
    threeSeconds: false,
    clickTimes: 0
}