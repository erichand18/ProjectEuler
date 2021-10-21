/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
/*
Writing out all numbers from 1 to 20, it's easy to tell there is a lot of crossover. For instance if a number is divisible
by both 2 and 5, it's divisible by 10, so you don't need to multiply by 10, just 2 and 5. Expanding this strategy, you can
start at 2, and divide each even number after it up to 20 by 2, then repeat for 3 and etc. Once this process is complete simply
use some accumulator/reduce function to find the product of the remaining values.
*/
function smallestMultiple(highestVal) {
    var numberRange = [];
    for (var i = 2; i <= highestVal; i++) {
        numberRange.push(i);
    }
    for (var j = 0; j < numberRange.length - 1; j++) {
        for (var k = j + 1; k < numberRange.length; k++) {
            if (numberRange[k] % numberRange[j] === 0) {
                numberRange[k] = numberRange[k] / numberRange[j];
            }
        }
    }
    return numberRange.reduce(function (previousValue, currentValue) {
        return currentValue * previousValue;
    });
}
console.log(smallestMultiple(20));
