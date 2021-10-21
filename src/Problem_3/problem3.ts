/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

/*
This is an iterative solution which will continue to divide by a given number while it is evenly divisible.
For example, if the number were 8, you would divide by 2 until you were left with 1. The highest number by which 
you divided your original number by is its largest prime factor. There's no need to save a list of prime numbers 
because it will simply skip over any composite number as in the case of 4 where the division by 2 twice earlier would
render the number no longer a multiple of 4. There's no need to iterate all the way to the number being given as the largest
prime factor is its square root as is the case with 9, 25, 49, etc. The end condition to check for is if after the division 
the number is 1;
*/

function largestPrimeFactor(numToFactor: number): number {

  if (numToFactor < 1) {
    return -1; //input is no good.
  }

  let largestFactor: number = numToFactor;

  for (let i = 2; i <= Math.floor(Math.sqrt(numToFactor)); i++) {
    while (largestFactor % i === 0 && largestFactor !== i) {
      largestFactor /= i;
    }
  }

  return largestFactor; //This case can only be reached if the input number is 1.
}

console.log(largestPrimeFactor(1));