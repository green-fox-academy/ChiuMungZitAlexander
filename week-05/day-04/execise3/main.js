function MyPromise(executor) {
    try {
        executor.call(this, this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
        this.reject(e);
    }
}

MyPromise.prototype = {
    constructor: MyPromise,
    resolve: function (value) {
        this.value = value;
    },
    reject: function (reason) {
        this.reason = reason;
    }
}

var promise = new MyPromise(function (res, rej) {
    let a = 1 + 1;
    res
});