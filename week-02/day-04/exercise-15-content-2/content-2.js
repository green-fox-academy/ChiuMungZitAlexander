var dom = document.getElementsByTagName("p");

for (let item of dom) {
    item.innerText = document.querySelector(".dog").innerText;
}