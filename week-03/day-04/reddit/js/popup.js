"use strict";

const SHELTER_DOM = document.querySelector(".post-shelter");
const POST_WINDOW_DOM = document.querySelector(".post-window");
const URL_INPUT_DOM = document.getElementById("url-input");
const TITLE_INPUT_DOM = document.getElementById("title-input");
const CHECKBOX_DOM = document.getElementById("anonymus-check");
const WARNING_DOM = document.querySelector(".warning");

function showPostWindow() {
    let yOffest = -20;
    let opacity = 0;
    SHELTER_DOM.style.display = "block";
    let postWindowAnimation = setInterval(function() {
        POST_WINDOW_DOM.style.transform = "translateY(" + yOffest + "px)";
        POST_WINDOW_DOM.style.opacity = opacity;
        yOffest += 2;
        opacity += 0.1;
        if (!yOffest) {
            clearInterval(postWindowAnimation);
        }
    }, 50);
}

function hidePostWindow() {
    POST_WINDOW_DOM.style.transform = "translateY(-40px)";
    POST_WINDOW_DOM.style.opacity = 0;
    SHELTER_DOM.style.display = "none";
    postReset();
}

function postReset() {
    URL_INPUT_DOM.value = null;
    TITLE_INPUT_DOM.value = null;
    CHECKBOX_DOM.checked = false;
}

function postSubmit() {
    WARNING_DOM.innerHTML = "";
    if (!TITLE_INPUT_DOM.value) {
        WARNING_DOM.innerHTML = "***Title cannot be empty.***";
        return;
    } else {
        let requestObj = {
            "title": TITLE_INPUT_DOM.value,
            "href": URL_INPUT_DOM.value
        }
        httpPostRequest(requestObj);
        hidePostWindow();
        postReset();
        let img = document.createElement("img");
        img.src = "./img/loading.gif";
        POST_LIST_DOM.appendChild(img);
    }
}