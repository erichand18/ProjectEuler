/*

*/

function makeChange(total: number): number {
  let possibilityCount: number = 0;
  let possibleAmounts: number[] = [200, 100, 50, 20, 10, 5, 2, 1];

  function possibilityFinder(remainingSum: number, startingIndex: number): void {
    if (remainingSum === 0) {
      possibilityCount++;
      return;
    }
    for (let i = startingIndex; i < possibleAmounts.length; i++) {
      if (remainingSum >= possibleAmounts[i]) {
        possibilityFinder(remainingSum - possibleAmounts[i], i);
      }
    }
  }
  possibilityFinder(total, 0);
  return possibilityCount;
};

console.log(makeChange(200))