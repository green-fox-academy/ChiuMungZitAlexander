'use strict';

var buttonElements = [
    'Button 0',
    'Button 1',
    'Button 2'
].map(function (buttonText) {
    var buttonElement;
    buttonElement = document.createElement('button');
    buttonElement.appendChild(document.createTextNode(buttonText));
    return buttonElement;
});

function appendButtons() {
    for (var i = 0; i < buttonElements.length; i++) (function (n) {
        {
            buttonElements[n].addEventListener('click', function () {
                console.log('button index: ', n);
            });
            document.body.appendChild(buttonElements[i]);
        }
    })(i);
}

window.addEventListener('load', appendButtons);
