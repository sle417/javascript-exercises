const convertToCelsius = function(num) {
  num = 5/9 * (num - 32);
  num = Math.round(num * 10) / 10;
  return num;
};

const convertToFahrenheit = function(num) {
  num = (9/5 * num) + 32;
  num = Math.round(num * 10) / 10;
  return num;
};

//convertToCelsius(32) // fahrenheit to celsius, should return 0

//convertToFahrenheit(0) // celsius to fahrenheit, should return 32


//Because we are human, we want the result temperature to be rounded to one decimal place: i.e., convertToCelsius(100) should return 37.8 and not 37.77777777777778.
// Do not edit below this line


module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
