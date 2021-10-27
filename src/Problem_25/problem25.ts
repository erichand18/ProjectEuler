/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

/*
Computers don't like 1000 digit numbers, so we'll make our own variable with an array! We'll just keep 3 arrays to store our 
previously calculated fibonacci numbers. We'll keep track of the index and return it out of our function
*/

function thousandDigitFibonacci(): number {
  let index: number = 2; //2 is the third fibonacci number which is where we are starting

  let arr1: number[] = [1];
  let arr2: number[] = [1];
  let arr3: number[] = [];

  while (arr2.length < 1000) {
    //assign new fibonacci number to arr3
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] === undefined) {
        arr1[i] = 0;
      }
      if (arr3[i] === undefined) {
        arr3[i] = 0;
      }
      arr3[i] = arr3[i] + arr1[i] + arr2[i];

      if (arr3[i] >= 10) {
        arr3[i + 1] = (arr3[i] - (arr3[i] % 10)) / 10;
        arr3[i] = arr3[i] % 10;
      }
    }
    index++;
    arr1 = arr2;
    arr2 = arr3;
    arr3 = [];
  }


  return index;
}

console.log(thousandDigitFibonacci());