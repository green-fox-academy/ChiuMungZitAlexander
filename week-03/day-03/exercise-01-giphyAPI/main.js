window.onload = function () {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            imgData = JSON.parse(http.response).data;
            imgData.length = 16;
            console.log(imgData);
            imgData.forEach(function (obj) {
                let thumbnailDOM = document.createElement("img");
                thumbnailDOM.src = obj.images.fixed_width_small_still.url;
                thumbnailDOM.clicked = false;
                thumbnailDOM.id = obj.id;
                thumbnailDOM.setAttribute("onclick", "clickChange(this)");
                thumbnailDOM.setAttribute("onmouseover", "mouseOverChange(this)");
                thumbnailDOM.setAttribute("onmouseout", "mouseOutChange(this)");
                mainDOM.appendChild(thumbnailDOM);
                imgDom.push(thumbnailDOM);
            }, this);
        }
    }

    http.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=170d11b61b28434eb8f1a248369db3e2&q=16&limit=25&offset=0&rating=G&lang=en");
    http.send(null);
}

var imgData = [];
var mainDOM = document.querySelector("main")
var imgDom = [];
var loaderURL = "loader.gif";

function clickChange(dom) {
    var clickDom = imgData.filter(function (obj) {
        return obj.id === dom.id
    })[0];
    if (!dom.clicked) {
        dom.src = clickDom.images.fixed_width_small.url;
        /* pic.onload = function () {
            dom.src = pic;
        } */
        dom.clicked = !dom.clicked;
    } else {
        dom.src = clickDom.images.fixed_width_small_still.url;
        dom.clicked = !dom.clicked;
    }
}

function mouseOverChange(dom) {
    var clickDom = imgData.filter(function (obj) {
        return obj.id === dom.id
    })[0];
    dom.src = clickDom.images.fixed_width_small.url;
}

function mouseOutChange(dom) {
    var clickDom = imgData.filter(function (obj) {
        return obj.id === dom.id
    })[0];
    dom.src = clickDom.images.fixed_width_small_still.url;
}