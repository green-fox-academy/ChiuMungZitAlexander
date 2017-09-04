function Sharpie(_color, _width) {
    if (typeof _color === "string") {
        this.color = _color;
        console.log(this.color);
    } else {
        this.color = undefined;
    }

    if (!isNaN(parseFloat(_width))) {
        this.width = _width;
        console.log(this.width);
    } else {
        this.width = undefined;
    }
    this.inkAmount = 100;
    this.use = function() {
        if (this.color !== undefined && this.width !== undefined) {
            this.inkAmount -= this.width;
        }
    }
}

var sharpie1 = new Sharpie("red", 4.25);
sharpie1.use();
console.log(sharpie1.inkAmount);
console.log();

var sharpie2 = new Sharpie(4.25, "red");
sharpie2.use();
console.log(sharpie2.inkAmount);