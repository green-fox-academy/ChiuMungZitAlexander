const SHELTER_DOM = document.querySelector(".post-shelter");
const URL_INPUT_DOM = document.getElementById("url-input");
const TITLE_INPUT_DOM = document.getElementById("title-input");
const CHECKBOX_DOM = document.getElementById("anonymus-check");
const WARNING_DOM = document.querySelector(".warning");

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