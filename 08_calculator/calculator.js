const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(args) {
  let sum = 0;
  for (i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const multiply = function(args) {
  let product = 1;

  for (i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {

  let fact = num;
  let result = 1;
  if (num == 0) {
    return 1;
  }

  for (i = fact; i > 0; i--) {
    result *= fact--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
