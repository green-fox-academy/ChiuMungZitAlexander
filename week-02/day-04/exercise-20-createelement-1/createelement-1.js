var newAsteroid = document.createElement("li");
newAsteroid.innerHTML = "The Green Fox";
document.querySelector(".asteroids").appendChild(newAsteroid);

newAsteroid.innerHTML = "The Lamplighter";
document.querySelector(".asteroids").appendChild(newAsteroid);

var heading = document.createElement("h1");
heading.innerHTML = "I can add elements to the DOM!";
document.querySelector(".container").appendChild(heading);

var img = document.createElement("img");
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKmFjpqudSpqvYAM-ejaGLj7itfHa-AjWqNR6lCqZ39UTovX1NCUJDsH4";
document.querySelector(".container").appendChild(img);