/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

/*
Looking at the problem, it could be possible to create a 2D matrix of the numbers and go down each diagonal, but that would be both time and memory intensive.
Instead, we see that starting at one, to get each of the four corners of the next layer, we can simply add to 2 to the number each time, getting 1, 3, 5, 7 and 9.
Applying this approach, we can create a generalized approach that will give the sum of diagonals for any given matrix size.
*/

function spiralDiagonalSum(edgeLength: number): number {
  if (edgeLength % 2 === 0) {
    return -1;
  }

  let sum: number = 1;

  let currentNum: number = 1;
  let incrementAmount: number = 2;
  let currentEdgeLength: number = 1;

  while (currentEdgeLength < edgeLength) {
    for (let i = 1; i <= 4; i++) {
      currentNum += incrementAmount;
      sum += currentNum;
    }
    incrementAmount += 2;
    currentEdgeLength += 2;
  }

  return sum;
}

console.log(spiralDiagonalSum(1001));