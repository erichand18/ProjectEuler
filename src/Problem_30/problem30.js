/*

*/
function makeChange(total) {
    var possibilityCount = 0;
    var possibleAmounts = [200, 100, 50, 20, 10, 5, 2, 1];
    function possibilityFinder(remainingSum, startingIndex) {
        if (remainingSum === 0) {
            possibilityCount++;
            return;
        }
        for (var i = startingIndex; i < possibleAmounts.length; i++) {
            if (remainingSum >= possibleAmounts[i]) {
                possibilityFinder(remainingSum - possibleAmounts[i], i);
            }
        }
    }
    possibilityFinder(total, 0);
    return possibilityCount;
}
;
console.log(makeChange(200));
