var button = document.querySelector("button");

button.addEventListener("click", turn, false);

function turn() {
    !button.className ? button.className = "party" : button.className = "";
}