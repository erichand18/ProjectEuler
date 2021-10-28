/*
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the 10,001st prime number?
*/

/*
  The first step for the solution is to create a means of determining if a number is prime. A number's largest factor that isn't
  itself is it's square root at most. So, to determine whether it's prime or not, it's possible to check all numbers from 2 to the 
  square root. However, to cut the time significantly, starting at two, you can keep track of all primes that have been found and just
  through those previously discovered primes for divisibility. If it's prime, add it to the list until the length of the primes list is
  the number you are searching for e.g. 10001.
*/

function nthPrime(n: number): number {

  let primeNums: number[] = [2]; //List of primes

  let primeNumFlag: boolean = true; //boolean flag for if a num is prime

  for (let i = 2; primeNums.length < n; i++) {
    for (let p = 0; p < primeNums.length; p++) {
      if (i % primeNums[p] === 0) {
        primeNumFlag = false;
      }
    }

    primeNumFlag ? primeNums.push(i) : primeNumFlag = true;
  }

  return primeNums[n - 1];
}

console.log(nthPrime(10001));