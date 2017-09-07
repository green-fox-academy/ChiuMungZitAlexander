/* GET /posts
POST /posts
PUT /posts/<id>/upvote
PUT /posts/<id>/downvote
DELETE /posts/<id>
PUT /posts/<id> */

"use strict";

const HOST_NAME = "https://time-radish.glitch.me/posts/";
const POST_LIST_DOM = document.querySelector(".post-content-list");
const MAX_LIST_LEGNTH = 20;
var innerHTML1 = '<section class="post"><div class="order-num">';
var innerHTML2 = '</div><div class="up-down"><div class="up"></div><div class="up-number">';
var innerHTML3 = '</div><div class="down"></div></div><div class="post-content"><div class="title" title="'
var innerHTML3_1 = '">';
var innerHTML4 = '</div><div class="time">';
var innerHTML5 = '</div><div class="operation"><span>modify</span><span>remove</span></div></div></section>';
var postContent = [];

window.onload = function () {
    httpGetRequest();
    document.querySelector(".post-shelter .post-window").addEventListener("click", function (e) {
        e.stopPropagation();
    })
}

function httpGetRequest() {
    let img = document.createElement("img");
    img.src = "./img/loading.gif";
    POST_LIST_DOM.appendChild(img);
    fetch(HOST_NAME).then(function (response) {
        response.json().then(function (postData) {
            postContent = postData.posts.reverse();
            POST_LIST_DOM.innerHTML = "";
            updateEntirePostList(MAX_LIST_LEGNTH);
        })
    })
}

function httpPostRequest(headerObj) {
    fetch(HOST_NAME, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(headerObj),
    }).then(function (response) {
        response.json().then(function (data) {
            httpGetRequest();
        })
    })
}

function updateEntirePostList(maxlen) {
    postContent.splice(0, maxlen).forEach(function (postObj, index) {
        createPostList(index, postObj.score, postObj.title, postObj.timestamp, postObj.owner);
    }, this);
}

function updateSinglePost() {

}

function createPostList(index, upNumber, title, time, owner) {
    if (!title) {
        title = "(No Title)";
    }
    if (!owner) {
        owner = "Anonymous";
    }
    let date = new Date();
    let leaveTime = Math.round((date.getTime() - time) / 1000);
    if (leaveTime < 60 && leaveTime >= 0) {
        if (leaveTime === 1) {
            leaveTime = "submitted " + leaveTime + " second ago by " + owner;
        } else {
            leaveTime = "submitted " + leaveTime + " seconds ago by " + owner;
        }
    } else if (leaveTime >= 60 && leaveTime < 3600) {
        leaveTime = Math.round(leaveTime / 60);
        if (leaveTime === 1) {
            leaveTime = "submitted " + leaveTime + " minute ago by " + owner;
        } else {
            leaveTime = "submitted " + leaveTime + " minutes ago by " + owner;
        }
    } else if (leaveTime >= 3600 && leaveTime < 86400) {
        leaveTime = Math.round(leaveTime / 3600);
        if (leaveTime === 1) {
            leaveTime = "submitted " + leaveTime + " hour ago by " + owner;
        } else {
            leaveTime = "submitted " + leaveTime + " hours ago by " + owner;
        }
    } else if (leaveTime >= 86400) {
        leaveTime = Math.round(leaveTime / 86400);
        if (leaveTime === 1) {
            leaveTime = "submitted " + leaveTime + " day ago by " + owner;
        } else {
            leaveTime = "submitted " + leaveTime + " days ago by " + owner;
        }
    } else {
        leaveTime = "submitted just now by " + owner;
    }
    POST_LIST_DOM.innerHTML += innerHTML1 + (index + 1) + innerHTML2 + upNumber + innerHTML3 + title + innerHTML3_1 + title + innerHTML4 + leaveTime + innerHTML5;
}