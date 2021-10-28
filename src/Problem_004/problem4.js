/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
function largestPalindromicNumber(highestVal) {
    var highestPalidrome = 0;
    var palCheck = 0;
    for (var i = 1; i <= highestVal; i++) {
        for (var j = 1; j <= highestVal; j++) {
            palCheck = i * j;
            if (palCheck.toString() === palCheck.toString().split("").reverse().join("")) {
                if (palCheck > highestPalidrome) {
                    highestPalidrome = palCheck;
                }
            }
        }
    }
    return highestPalidrome;
}
console.log(largestPalindromicNumber(1000));
