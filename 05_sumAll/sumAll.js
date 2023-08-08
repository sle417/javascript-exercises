const sumAll = function(num1, num2) {

    let sum = 0;

    if ((num1 < 0 || num2 < 0)) {
        return 'ERROR';
    }

    if ((typeof num1 !== "number") || (typeof num2 !== "number")) {
        return 'ERROR';
    }

    if (num1 < num2) {
        for (i = 0; i < num2; i++) {
            sum = num1 + sum;
            num1++;
        }

    } else if (num1 > num2) {
        for (i = num1; i > 0; i--) {
            sum = num2 + sum;
            num2++;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
