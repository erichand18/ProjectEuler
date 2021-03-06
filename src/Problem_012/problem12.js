/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/
/*
The problem is most easily broken up into 2 parts: finding triangle numbers and counting divisors of a given number. I'll write a helper
function to count divisors and the main function will find triangle numbers. Keep in mind a number's largest divisor that isn't itself is
half of its value.
*/
function countDivisors(num) {
    var numDivisors = 1; //start at 1 to include the number itself
    for (var i = 1; i < Math.floor(num / 2); i++) {
        if (num % i === 0) {
            numDivisors++;
        }
    }
    return numDivisors;
}
function numDivisorsTriangleNum(numOfDivisors) {
    var currentNum = 1;
    var currentTriangleNum = 0;
    var found = false;
    while (!found) {
        currentTriangleNum += currentNum;
        currentNum++;
        if (countDivisors(currentTriangleNum) > numOfDivisors) {
            found = true;
        }
    }
    return currentTriangleNum;
}
console.log(numDivisorsTriangleNum(500));
