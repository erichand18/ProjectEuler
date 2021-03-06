/*
Consider all integer combinations of a^b for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5.

If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:

4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

How many distinct terms are in the sequence generated by a^b for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?
*/
/*
The simple of calculating this is to calculate all powers, sort the array of answers, then push unique values to a new array
and return its length.
*/
function uniqueAtoTheBPower(aMax, bMax) {
    var combinations = [];
    for (var i = 2; i <= aMax; i++) {
        for (var j = 2; j <= bMax; j++) {
            combinations.push(Math.pow(i, j));
        }
    }
    combinations.sort(function (a, b) {
        return a - b;
    });
    var uniqueCombinations = [];
    for (var k = 0; k < combinations.length; k++) {
        if (combinations[k] !== uniqueCombinations[uniqueCombinations.length - 1]) {
            uniqueCombinations.push(combinations[k]);
        }
    }
    return uniqueCombinations.length;
}
console.log(uniqueAtoTheBPower(100, 100));
