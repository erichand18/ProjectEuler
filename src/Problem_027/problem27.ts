/*
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

The quadratic is in the form n^2 + an + b where |a|<1000 and |b|<=1000.

*/

/*
Right off the bat seeing that n=0 is included saves a tremendous amount of time because when n = 0, f(0) = b which must produce a prime number.
This means that b must be prime. On top of that, it must be positive, so we can refine the values of b to 2<=n<=997 where n is prime. This means 
we can create a function that plugs in values of n for a given a and b, and outputs the highest value of n it calculated before reaching a composite
number. By tracking the highest number reached among all possible a and b combinations, we can determine the answer.
*/

let primesToOneThousand = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191,
  193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
  293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401,
  409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
  521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631,
  641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751,
  757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877,
  881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];

function numIsPrime(num: number): boolean {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


function numConsecutivePrimes(a: number, b: number): number {
  let n: number = 0;
  while (numIsPrime(Math.abs((n * n) + (n * a) + b))) {
    n++;
  }

  return n;
}

function maximumConsecutivePrimes(): number {
  let highestNum: number = 0;
  let currentNum: number = 0;

  let highestA: number = 0;
  let highestB: number = 0;

  for (let i = -999; i < 1000; i++) {
    for (let j = 0; j < primesToOneThousand.length; j++) {
      currentNum = numConsecutivePrimes(i, primesToOneThousand[j])
      if (highestNum < currentNum) {
        highestNum = currentNum;
        highestA = i;
        highestB = primesToOneThousand[j];
      }
    }
  }
  return highestA * highestB;
}


console.log(maximumConsecutivePrimes())