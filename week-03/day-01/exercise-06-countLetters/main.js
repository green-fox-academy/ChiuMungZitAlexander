'use strict';

function countLetterInString(string, letter) {
  if (typeof string !== "string") {
    return 0;
  }
  return Array.from(string).reduce(function (sum, value) {
    if (letter === value) {
      return sum + 1;
    }
    return sum;
  }, 0);
}

module.exports = countLetterInString;