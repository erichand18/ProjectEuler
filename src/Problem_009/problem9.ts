/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

/*
  It can be calculated that if a=b and the Pythagorean Theorem holds, to be add up to less than 1000, a and b must be 292 or less. 
  Also, by using algebra, it can be seen that the equation a + b + ab/1000 = 500 must hold. So, by iterating through the combinations 
  between 1 and 292 for a and  292 to 708 (remainder) b, and checking if they form a pytharogean triplet, the solution can be found.
*/

function checkPythagorean(a: number, b: number, c: number): boolean {
  if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
    return true;
  } else {
    return false;
  }
}

function findTripletProduct(): number {
  for (let i = 1; i < 292; i++) {
    for (let j = 292; j < 708; j++) {
      if (checkPythagorean(i, j, 1000 - i - j)) {
        return i * j * (1000 - i - j);
      }
    }
  }

  return 0;
}

console.log(findTripletProduct());