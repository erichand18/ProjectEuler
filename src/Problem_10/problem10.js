/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/
/*
By checking if each number between 3 and the target number is prime, we can simply find primes until
we reach two million, adding to a running sum while we do so.
*/
function sumPrimes(maxNum) {
    var sum = 2; //start at 2 to cover only even prime
    var primeNumFlag = true; //boolean flag for if a num is prime
    for (var i = 3; i < maxNum; i += 2) {
        for (var p = 2; p <= Math.sqrt(i); p++) {
            if (i % p === 0) {
                primeNumFlag = false;
            }
        }
        if (primeNumFlag === true) {
            sum += i;
        }
        primeNumFlag = true;
    }
    return sum;
}
console.log(sumPrimes(2000000));
