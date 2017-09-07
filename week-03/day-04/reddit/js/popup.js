const SHELTER_DOM = document.querySelector(".post-shelter");
const URL_INPUT_DOM = document.getElementById("url-input");
const TITLE_INPUT_DOM = document.getElementById("title-input");
const CHECKBOX_DOM = document.getElementById("anonymus-check");

function showPostWindow() {
    SHELTER_DOM.style.display = "block";
}

function hidePostWindow() {
    SHELTER_DOM.style.display = "none";
}

function postReset() {
    URL_INPUT_DOM.value = null;
    TITLE_INPUT_DOM.value = null;
    CHECKBOX_DOM.checked = false;
}

function postSubmit() {

}