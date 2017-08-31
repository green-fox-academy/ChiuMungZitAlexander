(function(){var domArray = document.querySelectorAll("h1");
for (let item of domArray) {
    item.innerHTML = "Green Fox Academy Conquers the World."; 
}})()

var js = "(function(){var domArray = document.querySelectorAll('h1');for (let item of domArray) {item.innerHTML = 'Green Fox Academy Conquers the World.';}})()";

document.querySelector("a").href = "javascript:" + js;