// 1
alert(document.getElementsByTagName("h1")[0].innerText);

// 2
console.log(document.getElementsByTagName("p")[0].innerText);

// 3
alert(document.getElementsByClassName("other")[0].innerText);

// 4
document.getElementsByTagName("h1")[0].innerText = "New content";

// 5
document.getElementsByClassName("result")[0].innerText = document.getElementsByTagName("p")[0].innerText;