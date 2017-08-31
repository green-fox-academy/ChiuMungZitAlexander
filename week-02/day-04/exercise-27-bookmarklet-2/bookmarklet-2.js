(function(){
    var img = document.querySelectorAll("img");
    for (let dom of img) {
        dom.src = "http://bit.ly/lpgreenfox";
    }
})()

var js = "(function(){var img = document.querySelectorAll('img');for (let dom of img) {dom.src = 'http://bit.ly/lpgreenfox';}})()";

document.querySelector("a").href = "javascript:" + js;