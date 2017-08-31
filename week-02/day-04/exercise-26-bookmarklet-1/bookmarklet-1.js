var domArray = document.getElementsByTagName("h1");

for (let item of domArray) {
    item.innerHTML = "Green Fox Academy Conquers the World.";
}

var js = "javascript:var domArray=document.getElementsByTagName('h1');for(let item of domArray){item.innerHTML='Green Fox Academy Conquers the World.';}";

document.querySelector("a").href = "window.external.addFavorite(js, title)";