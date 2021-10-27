/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

/*
Obviously 100! is too big of a number to store in a variable. However, we can use an array and essentially create
a function that operates as a calculator storing a digit in each element. Due to dynamic sizing of arrays in JS we
don't even need to estimate the needed size! (a quick google search shows 158 digits)
*/

function sumFactorialDigits(n: number): number {
  let calculator: number[] = [1];

  for (let i = 1; i <= n; i++) {
    calculator.forEach(function (value: number, index: number): void {
      calculator[index] = value * i;
    })
    for (let index = 0; index < calculator.length; index++) {
      if (calculator[index] >= 10) {
        if (calculator[index + 1] === undefined) {
          calculator.push(0);
        }
        calculator[index + 1] += (calculator[index] - calculator[index] % 10) / 10;
        calculator[index] %= 10;
      }
    }
  }

  let sum: number = 0;

  for (let i = 0; i < calculator.length; i++) {
    sum += calculator[i];
  }

  return sum;
}

console.log(sumFactorialDigits(100));