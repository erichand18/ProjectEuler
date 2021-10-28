/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant 
if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as 
the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater 
than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any 
further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two 
abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

/*
  Starting backwards to reverse engineer a solution, first we need to know all numbers that cannot be respresented as the sum 
  of two abundant numbers. To get this, we need some way of determining if a number *can* be written as such a sum. If we want 
  to know whether we can add two abundant numbers to get the number, we need to know the abundant numbers less than 28123. If we
  had them in a list, we could iterate through the numbers up to 14062 and see if the necessary counterpart exists in the list 
  of abundant numbers. 
  
  Taking what we know now, we can begin by determining the list of abundant numbers less than 28123. Once we have that, we can 
  iterate 1 to 28123 and determine if it is able to be the sum of two numbers on our list. If it is, we add that to our running sum. 
  Once we have gone through all values, we return the sum.
*/

function isAbundant(n: number): boolean {

  let sum: number = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  if (sum > n) {
    return true;
  } else {
    return false;
  }
}

function generateAllAbundant(): number[] {
  let result: number[] = [];

  for (let i = 12; i <= 28123; i++) {
    if (isAbundant(i)) {
      result[i] = i;
    }
  }

  return result;
}

function sumAllSumOfTwoAbundantNums(): number {
  let sum: number = 0;

  let listOfAbundant: number[] = generateAllAbundant();
  let foundPair: boolean = false;

  for (let i = 1; i <= 28123; i++) {
    for (let j = 0; j <= i; j++) {
      if (listOfAbundant[j] !== undefined && listOfAbundant[i - j] === i - j) {
        foundPair = true;
      }
    }

    if (foundPair === false) {
      sum += i;
    }
    foundPair = false;
  }

  return sum;
}

console.log(sumAllSumOfTwoAbundantNums());