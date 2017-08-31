var list = ['apple', 'banana', 'cat', 'dog'];

for (let index in document.getElementsByTagName("li")) {
    document.getElementsByTagName("li")[index].innerHTML = list[index];
}