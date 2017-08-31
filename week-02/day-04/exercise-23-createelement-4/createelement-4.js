document.querySelector(".asteroids").removeChild(document.querySelector("li"));

var planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true
    }
];

planetData.forEach(function(obj, index, array) {
    if (obj.asteroid) {
        var dom = document.createElement("li");
        dom.className = obj.category;
        dom.innerHTML = obj.content;
        document.querySelector(".asteroids").appendChild(dom);
    }
}, this);