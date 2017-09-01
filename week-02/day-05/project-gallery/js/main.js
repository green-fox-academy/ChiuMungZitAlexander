var imgArr = [
    {
        name: "Kobe Bryant",
        slidePath: "images/gallery/KobeBryant.jpg",
        thumbnailPath: "images/thumbnails/KobeBryant.jpg",
        description: "Kobe Bean Bryant (born August 23, 1978) is an American retired professional basketball player and businessman. He played his entire 20-year career with the Los Angeles Lakers of the National Basketball Association (NBA)."
    },
    {
        name: "Kevin Durant",
        slidePath: "images/gallery/KevinDurant.jpg",
        thumbnailPath: "images/thumbnails/KevinDurant.jpg",
        description: "Kevin Wayne Durant (born September 29, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA)."
    },
    {
        name: "Kyrie Irving",
        slidePath: "images/gallery/KyrieIrving.jpg",
        thumbnailPath: "images/thumbnails/KyrieIrving.jpg",
        description: "Kyrie Andrew Irving (born March 23, 1992) is an American professional basketball player for the Boston Celtics of the National Basketball Association (NBA)."
    },
    {
        name: "Stephen Curry",
        slidePath: "images/gallery/StephenCurry.jpg",
        thumbnailPath: "images/thumbnails/StephenCurry.jpg",
        description: "Wardell Stephen Curry II (born March 14, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Many players and analysts have called him the greatest shooter in NBA history."
    },
    {
        name: "Kawhi Leonard",
        slidePath: "images/gallery/KawhiLeonard.jpg",
        thumbnailPath: "images/thumbnails/KawhiLeonard.jpg",
        description: "Kawhi Anthony Leonard (born June 29, 1991) is an American professional basketball player for the San Antonio Spurs of the National Basketball Association (NBA)."
    },
]

var slideIndex = 0;
var slideImgDOM = document.querySelector(".pic img");
var nameDOM = document.querySelector(".pic .description h2");
var descriptionDOM = document.querySelector(".pic .description p");
var thumbDOM = document.querySelector(".thumbnails");

window.onload = function () {
    scroll(0);
    creatThumbs();
    // autoScroll();
    // document.querySelector("main").addEventListener("mouseover", clearInt());
}

function scroll(index) {
    if (slideIndex + index < 0) {
        slideIndex = imgArr.length - 1;
    } else if (slideIndex + index >= imgArr.length) {
        slideIndex = 0
    } else {
        slideIndex += index;
    }
    slideImgDOM.src = imgArr[slideIndex].slidePath;
    nameDOM.innerHTML = imgArr[slideIndex].name;
    descriptionDOM.innerHTML = imgArr[slideIndex].description;
    creatThumbsClick(slideIndex);
}

function indexScroll() {
    slideImgDOM.src = imgArr[slideIndex].slidePath;
    nameDOM.innerHTML = imgArr[slideIndex].name;
    descriptionDOM.innerHTML = imgArr[slideIndex].description;
}

// function autoScroll() {
//     var id = setInterval(function() {
//         scroll(1);
//     }, 2000);
// }

// function clearInt() {
//     clearInterval(id);
// }

function creatThumbs() {
    imgArr.forEach(function (obj, index, array) {
        var nodeNav = document.createElement("nav");
        if (!index) {
            nodeNav.className = "active";
        }
        var nodeDiv = document.createElement("div");
        nodeDiv.setAttribute("onClick", "creatThumbsClick(" + index + ")");
        var nodeImg = document.createElement("img");
        nodeImg.src = obj.thumbnailPath;
        var nodeDivPopup = document.createElement("div");
        nodeDivPopup.className = "popup"
        nodeDiv.appendChild(nodeImg);
        nodeNav.appendChild(nodeDiv);
        nodeNav.appendChild(nodeDivPopup);
        thumbDOM.appendChild(nodeNav);
    }, this);
}

function creatThumbsClick(index) {
    var navDOM = document.querySelectorAll(".thumbnails nav");
    navDOM.forEach(function (dom, domIndex) {
        dom.className = "";
        if (domIndex === index) {
            dom.className = "active";
        }
    }, this);
    slideIndex = index;
    indexScroll();
}
