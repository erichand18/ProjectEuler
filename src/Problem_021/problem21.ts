/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

/*
Once we can determine the sum of proper divisors, it's a simple matter of finding the possible amicable pair and checking
that numbers proper divisor sum number. Iterate this process for 1 to 9999 and sum any numbers that meet the criteria.
*/

function properDivisorsSum(n: number): number {
  let sum: number = 0;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}

function sumAmicableNumbers(): number {
  let sum: number = 0;
  let currentDivisorSum: number = 0;

  for (let i = 1; i < 10000; i++) {
    currentDivisorSum = properDivisorsSum(i);
    if (i === properDivisorsSum(currentDivisorSum) && i !== currentDivisorSum) {
      sum += i;
      console.log(i)
    }
  }

  return sum;
}

console.log(sumAmicableNumbers());