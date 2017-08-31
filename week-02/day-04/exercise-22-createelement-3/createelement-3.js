document.querySelector(".asteroids").removeChild(document.querySelector("li"));

var list = ['apple', 'bubble', 'cat', 'green fox'];
list.forEach(function(value, index, array) {
    var dom = document.createElement("li");
    dom.innerHTML = value;
    document.querySelector(".asteroids").appendChild(dom);
}, this);