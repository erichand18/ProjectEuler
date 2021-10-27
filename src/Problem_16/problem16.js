/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/
/*
This is trivial to solve if you can just properly store the number. However 2^1000 is well
beyond the limit of any number variable in JS, so we'll use an array to store the values and
essentially create our own calculator.
*/
function sumPowerOfTwoDigits(n) {
    var calculator = [1];
    for (var i = 1; i <= n; i++) {
        calculator.forEach(function (value, index) {
            calculator[index] = value * 2;
        });
        for (var index = 0; index < calculator.length; index++) {
            if (calculator[index] >= 10) {
                if (calculator[index + 1] === undefined) {
                    calculator.push(0);
                }
                calculator[index + 1] += (calculator[index] - calculator[index] % 10) / 10;
                calculator[index] %= 10;
            }
        }
    }
    var sum = 0;
    for (var i = 0; i < calculator.length; i++) {
        sum += calculator[i];
    }
    return sum;
}
console.log(sumPowerOfTwoDigits(1000));
