/*

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

/*
The solution is fairly straightforward: iterate from 2 to one million and calculate the length of each COllatz chain. 
Once a longer chain is found, note which starting number produced it store the value. Return the longest chain at the end.
*/

function collatzLength(startingNum: number): number {
  let chainLength: number = 1;

  while (startingNum !== 1) {
    if (startingNum % 2 === 0) {
      startingNum /= 2;
    } else {
      startingNum = startingNum * 3 + 1;
    }

    chainLength++;
  }

  return chainLength;
}

function largestCollatzChainNum(): number {
  let currentChain: number = 0;
  let longestChain: number = 0;
  let longestChainStartNum: number = 1;

  for (let i = 2; i < 1000000; i++) {
    currentChain = collatzLength(i)
    if (currentChain > longestChain) {
      longestChainStartNum = i;
      longestChain = currentChain;
    }
  }

  return longestChainStartNum;
}

console.log(largestCollatzChainNum());