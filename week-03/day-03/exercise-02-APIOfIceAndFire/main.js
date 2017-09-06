window.onload = function () {
    httpRequest();
}

var characterListDOM = document.querySelector(".characterList");
var bookData = [];
var URLObject = {
    path: "https://www.anapioficeandfire.com/api/characters",
    searchPage: "?page=",
    page: 1,
    searchPageSize: "&pageSize=",
    pageSize: 10
}

function httpRequest() {
    if (URLObject.page === 1) {
        document.querySelector(".previous").disabled = "disabled";
    } else {
        document.querySelector(".previous").disabled = "";
    }
    if (URLObject.page === 214) {
        document.querySelector(".next").disabled = "disabled";
    } else {
        document.querySelector(".next").disabled = "";
    }
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            bookData = JSON.parse(http.response);
            // console.log(bookData);
            createCharacters();
        }
    }
    http.open("GET", buildURL());
    http.send(null);
}

function buildURL() {
    let str = "";
    for (let key in URLObject) {
        str += URLObject[key];
    }
    return str;
}

function createCharacters() {
    characterListDOM.innerHTML = "";
    bookData.forEach(function (value, index) {
        let characterDOM = document.createElement("li");
        characterDOM.innerHTML = "<span>Name: " + value.name + "</span><span>Gender: " + value.gender + "</span>";
        characterListDOM.appendChild(characterDOM);
    })
}

function pageSearch(increment, index) {
    if (increment) {
        if (URLObject.page + increment >= 1 && URLObject.page + increment <= 214) {
            URLObject.page += increment;
        }
    } else {
        URLObject.page = index
    }
    httpRequest();
}