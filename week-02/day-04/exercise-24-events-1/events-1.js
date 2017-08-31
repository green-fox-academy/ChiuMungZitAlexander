var button = document.querySelector("button");
var div = document.querySelector("div");

button.addEventListener("click", turn, false);

function turn() {
    !div.className ? div.className = "party" : div.className = "";
}