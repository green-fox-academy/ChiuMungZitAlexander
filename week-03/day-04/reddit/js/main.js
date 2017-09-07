/* GET /posts
POST /posts
PUT /posts/<id>/upvote
PUT /posts/<id>/downvote
DELETE /posts/<id>
PUT /posts/<id> */

"use strict";

const HOST_NAME = "https://time-radish.glitch.me/posts/";
const POST_LIST_DOM = document.querySelector(".post-content-list");
var innerHTML1 = '<section class="post"><div class="order-num">';
var innerHTML2 = '</div><div class="up-down"><div class="up"></div><div class="up-number">';
var innerHTML3 = '</div><div class="down"></div></div><div class="post-content"><div class="title" title="'
var innerHTML3_1 = '">';
var innerHTML4 = '</div><div class="time">';
var innerHTML5 = '</div><div class="operation"><span>modify</span><span>remove</span></div></div></section>';
var postContent = [];

window.onload = function () {
    httpGetRequest();
    document.querySelector(".post-shelter .post-window").addEventListener("click", function(e) {
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
            updateEntirePostList();
        })
    })
}

function httpPostRequest() {

}

function updateEntirePostList() {
    postContent.forEach(function (postObj, index) {
        createPostList(index, postObj.score, postObj.title, postObj.timestamp);
    }, this);
}

function updateSinglePost() {

}

function createPostList(index, upNumber, title, time) {
    let date = new Date();
    let leave = date.getTime() - time;
    POST_LIST_DOM.innerHTML += innerHTML1 + (index + 1) + innerHTML2 + upNumber + innerHTML3 + title + innerHTML3_1 + title + innerHTML4 + leave + innerHTML5;
}