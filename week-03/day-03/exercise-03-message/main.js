window.onload = function () {
    inputNameDOM.value = "AlexanderZhao";
    startGetRequest();
}

var URL = "https://wakeful-vision.glitch.me/api/messages";
var inputNameDOM = document.querySelector("#inputName");
var inputTextDOM = document.querySelector("#inputText");
var warningDOM = document.querySelector(".warning");
var messageSectionUlDOM = document.querySelector(".messageSection ul");
var messageData = [];

function startGetRequest() {
    fetch(URL)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    messageData = data.messages.splice(data.messages.length - 5);
                    console.log("Successful get request.");
                    console.log(messageData);
                    updateMessage();
                });
        })
        .catch(function (error) {
            alert(error);
        });
}

function startPostRequest() {
    warningDOM.innerHTML = "";
    if (inputNameDOM.value === "" || inputNameDOM.value === null || inputTextDOM.value === "" || inputTextDOM.value === null) {
        warningDOM.innerHTML = "***Name and text cannot be empty.***";
        return;
    }
    let requestObj = {
        name: inputNameDOM.value,
        message: inputTextDOM.value
    }
    console.log(JSON.stringify(requestObj));
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestObj),
    })
        .then(function (response) {
            response.json()
                .then(function (data) {
                    warningDOM.innerHTML = "Successful submit.";
                    let obj = {
                        name: data.name,
                        message: data.message
                    }
                    messageData.push(obj);
                    messageData.splice(0, 1);
                    updateMessage();
                });
        })
        .catch(function (error) {
            alert(error);
        });
}

function updateMessage() {
    messageSectionUlDOM.innerHTML = "";
    messageData.forEach(function (messageObj) {
        let nodeLiDOM = document.createElement("li");
        let nodeNameDOM = document.createElement("p");
        nodeNameDOM.className = "name";
        nodeNameDOM.innerHTML = "<b>Name:</b> <span>" + messageObj.name + "</span>";
        let nodeMessageDOM = document.createElement("p");
        nodeMessageDOM.className = "message";
        nodeMessageDOM.innerHTML = "<b>Message:</b> <span>" + messageObj.message + "</span>";
        nodeLiDOM.appendChild(nodeNameDOM);
        nodeLiDOM.appendChild(nodeMessageDOM);
        messageSectionUlDOM.insertBefore(nodeLiDOM, messageSectionUlDOM.childNodes[0]);
    }, this);
}