'use strict';

function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8

function selectLastEvenNumber(arr, callback) {
    for (let item of arr.reverse()) {
        if (!(item % 2)) {
            callback(item);
            return;
        }
    }
}