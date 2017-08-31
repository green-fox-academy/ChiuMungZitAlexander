var button = document.querySelector("button").addEventListener("click", check, false);

function check() {
    document.querySelector(".result").innerHTML = document.querySelectorAll("li").length;
}