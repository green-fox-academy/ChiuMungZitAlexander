// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

var i = 8
var str = "% % % %"
while (i--) {
    (i % 2) ? console.log(str) : console.log(" " + str)
}
