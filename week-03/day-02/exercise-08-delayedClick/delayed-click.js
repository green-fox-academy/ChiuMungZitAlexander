function showTextAfterTwoSeconds() {
    setTimeout(function() {
        domBody.appendChild(domP);
    }, 2000);
    let domP = document.createElement("p");
    domP.innerHTML = "2 seconds elapsed."
    let domBody = document.querySelector("body");
}