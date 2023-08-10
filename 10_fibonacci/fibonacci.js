const fibonacci = function(num) {

    let num1 = 0;
    let num2 = 1;
    let result = 0;

    if (typeof num == "string") {
        num = parseInt(num);
    }

    if (num < 0) {
        return "OOPS";
    } else if (num == 0 || num == 1) {
        return num;
    }

    for (i = 1; i < num; i++) {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }

    return num2;
};
// A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// Do not edit below this line
module.exports = fibonacci;
