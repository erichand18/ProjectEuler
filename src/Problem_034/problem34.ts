/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.
*/

/*
The problem is easy enough to solve for any given number, but what is the highest number to check for? Well, for any
given digit the highest value is 9, would contribute 9! (362880) to the sum. Looking at 9,999,999, we see that we end up with
9! * 7  = 2540160 which is still less than the total, so the highest number achieved that is 7 digits is still less than the
sum of its factorials. This will be our max number to check over.

Next, we will need to design a function to return the factorial. But, because we are only dealing with 1-9, we can simply store
values in a tuple where the index is n and tuple[index] = n!.
*/

function equalToFactorialSum(): number {
  let count: number = 0;

  let factorials: number[] = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

  for (let i = 3; i < 9999999; i++) {
    let stringNum: string = i.toString();
    let currentSum: number = 0;
    for (let j = 0; j < stringNum.length; j++) {
      currentSum += factorials[parseInt(stringNum[j])];
    }
    if (currentSum === i) {
      count += i;
      console.log(i);
    }
  }

  return count;
}

console.log(equalToFactorialSum());