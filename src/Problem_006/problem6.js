/*
The sum of the squares of the first ten natural numbers is 385.

The square of the sum of the first ten natural numbers is 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
/*
The obvious first shot at a solution involves just iterating through and finding the sums before differencing the two.
However, the sum can actually be calculated iteratively without finding the square of the sums first. This is made by
possible by the relation: (1+2+3+4+...)^2 = 1^3 + 2^3 + 3^3 + 4^3 + ...

That in mind, we can iterate from 1 to our target number and simply add the difference of x^3 - x^2 for each term and return
the value.
*/
function sumSquareDifference(numberToSum) {
    var sum = 0;
    for (var i = 0; i <= numberToSum; i++) {
        sum += (Math.pow(i, 3) - Math.pow(i, 2));
    }
    return sum;
}
console.log(sumSquareDifference(100));
