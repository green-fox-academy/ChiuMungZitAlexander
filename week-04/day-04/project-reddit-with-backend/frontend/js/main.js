"use strict";

const HOST_NAME = 'http://localhost:3000/posts/';
const HOST_USER = 'http://localhost:3000/users/'
const POST_LIST_DOM = document.querySelector(".post-content-list");
const VOTE_REMINDER = document.querySelector(".voteReminder");
const WELCOME_DOM = document.querySelector('.welcome');
const LOGIN_WARNING_DOM = document.getElementById('loginWarning');
const MAX_LIST_LEGNTH = 20;
var postContent = [];
var user;

window.onload = function () {
    httpGetRequest();
    document.querySelector(".post-shelter .post-window").addEventListener("click", function (e) {
        e.stopPropagation();
    })
}

function httpGetRequest () {
POST_LIST_DOM.innerHTML = "";
let img = document.createElement("img");
    img.src = "./img/loading.gif";
    POST_LIST_DOM.appendChild(img);
    fetch(HOST_NAME).then(function (response) {
        response.json().then(function (postData) {
            postContent = postData.reverse();
            POST_LIST_DOM.innerHTML = "";
            updateEntirePostList(MAX_LIST_LEGNTH);
        })
    });
}

function httpPostRequest (headerObj) {
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
    POST_LIST_DOM.innerHTML = "";
    postContent.slice(0, maxlen).forEach(function (postObj, index) {
        createPostList(index, postObj.score, postObj.title, postObj.timestamp, postObj.owner, postObj.vote, postObj._id, postObj.href);
    }, this);
}

function updatePostData (updatedPostObj) {
    postContent.forEach(function (element) {
        if (updatedPostObj._id === element._id) {
            element.score = updatedPostObj.score;
            updateEntirePostList(MAX_LIST_LEGNTH);
        } 
    }, this);
}

function createPostList(index, upNumber, title, time, owner, vote, id, href) {
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
    // POST_LIST_DOM.innerHTML += innerHTML1 + (index + 1) + innerHTML2 + upNumber + innerHTML3 + title + innerHTML3_1 + title + innerHTML4 + leaveTime + innerHTML5;
    let postDom = document.createElement("section");
    postDom.className = "post";
    let orderNumDom = document.createElement("div");
    orderNumDom.className = "order-num";
    orderNumDom.innerHTML = index + 1;
    let upDownDom = document.createElement("div");
    upDownDom.className = "up-down";
    let upDom = document.createElement("div");
    upDom.className = "up";
    upDom.addEventListener("click", upVoteRequest(id));
    if (vote === 1 || sessionStorage.getItem(id + "up")) {
        upDom.style.background = 'url("./img/upvoted.png") no-repeat center center';
    }
    let upNumberDom = document.createElement("div");
    upNumberDom.className = "up-number";
    upNumberDom.innerHTML = upNumber;
    let downDom = document.createElement("div");
    downDom.className = "down";
    downDom.addEventListener("click", downVoteRequest(id));
    if (vote === -1 || sessionStorage.getItem(id + "down")) {
        downDom.style.background = 'url("./img/downvoted.png") no-repeat center center';
    }
    upDownDom.appendChild(upDom);
    upDownDom.appendChild(upNumberDom);
    upDownDom.appendChild(downDom);
    let postContentDom = document.createElement("div");
    postContentDom.className = "post-content";
    let titleDom = document.createElement("div");
    titleDom.className = "title";
    titleDom.title = title;
    titleDom.innerText = title;
    let timeDom = document.createElement("div");
    timeDom.className = "time";
    timeDom.innerText = leaveTime;
    let operationDom = document.createElement("div");
    operationDom.className = "operation";
    let modifySpanDom = document.createElement("span");
    modifySpanDom.innerText = "modify";
    modifySpanDom.addEventListener("click", function () {
        return showPostWindow(1, title, href, id, owner);
    });
    let removeSpanDom = document.createElement("span");
    removeSpanDom.innerText = "remove";
    removeSpanDom.addEventListener("click", deletePost(id, owner));
    operationDom.appendChild(modifySpanDom);
    operationDom.appendChild(removeSpanDom);
    postContentDom.appendChild(titleDom);
    postContentDom.appendChild(timeDom);
    postContentDom.appendChild(operationDom);
    postDom.appendChild(orderNumDom);
    postDom.appendChild(upDownDom);
    postDom.appendChild(postContentDom);
    POST_LIST_DOM.appendChild(postDom);
}

function upVoteRequest(postid) {
    return function () {
        /* let img = document.createElement("img");
        img.src = "./img/loading.gif";
        POST_LIST_DOM.appendChild(img); */
        if (sessionStorage.getItem(postid + "up")) {
            showReminder('you have voted');
            return;
        }
        fetch(HOST_NAME + postid + "/upvote", {
            method: 'PUT',
            headers: {
                'accept': 'application/json'
            },
        }).then(function (response) {
            sessionStorage.setItem(postid + "up", true);
            updateEntirePostList(MAX_LIST_LEGNTH);
            showReminder('vote successfully');
            response.json().then(function (data) {
                updatePostData(data[0]);
            });
        });
    }
}

function downVoteRequest(postid) {
    return function () {
        if (sessionStorage.getItem(postid + "down")) {
            showReminder('you have voted');
            return;
        }
        fetch(HOST_NAME + postid + "/downvote", {
            method: 'PUT',
            headers: {
                'accept': 'application/json'
            },
        }).then(function (response) {
            sessionStorage.setItem(postid + "down", true);
            updateEntirePostList(MAX_LIST_LEGNTH);
            showReminder('vote successfully');
            // dom.previousSibling.textContent++;
            response.json().then(function (data) {
                updatePostData(data[0]);
            });
        })
    }
}

function showReminder(text) {
    VOTE_REMINDER.style.display = "block";
    VOTE_REMINDER.textContent = text;
    let opacity = 2.5;
    let id = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            VOTE_REMINDER.style.opacity = opacity;
        } else {
            VOTE_REMINDER.display = "none";
            clearInterval(id)
        }
    }, 50)
}

function deletePost(postid, owner) {
    return function () {
        if (owner != user) {
            showReminder('not your post');
            return;
        }
        let confirmation = confirm("Really want to delete this post?");
        if (confirmation) {
            fetch(HOST_NAME + postid, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                },
            }).then(function (response) {
                httpGetRequest();
            })
        } else {
            return;
        }
    }
}

function modifyPost(requestObj, postid, owner) {
    fetch(HOST_NAME + postid, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Username': 'Anonymous'
        },
        body: JSON.stringify(requestObj)
    }).then(function (response) {
        httpGetRequest();
    })
}

function login() {
    var loginAccount = document.getElementById('loginAccount').value;
    var loginPassword = document.getElementById('loginPassword').value;
    if (!loginAccount || !loginPassword) {
        alert();
    } else {
        let requestObj = {
            account: loginAccount,
            password: loginPassword
        }
        fetch(HOST_USER, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObj),
        }).then(function (response) {
            response.json().then(function (data) {
                if (data.loginCondition) {
                    user = loginAccount;
                    document.querySelector('.welcome-name').textContent = user;
                    document.querySelector('.login').style.display = 'none';
                    fadeOutAnimation(document.querySelector('.sign-in'));
                    WELCOME_DOM.style.display = 'inline-block';
                } else {
                    LOGIN_WARNING_DOM.style.display = 'block';
                }
            });
        });
    }
}

function logout() {
    location.reload();
}

function fadeOutAnimation(dom) {
    let opacity = 1;
    let animation = setInterval(function() {
        dom.style.opacity = opacity;
        opacity -= 0.1;
        if (!opacity) {
            clearInterval(postWindowAnimation);
        }
    }, 25);
}