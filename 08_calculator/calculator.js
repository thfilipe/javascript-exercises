const add = function (num1, num2) {
  return num1 + num2
};

const subtract = function (num1, num2) {
  return num1 - num2
};

const sum = function (num) {
  if (num.length === 0) {
    return 0;
  }
  return num.reduce((acc, curr) => acc + curr)
};



const multiply = function (num) {
  return num.reduce((acc, curr) => acc * curr)
};

const power = function (num, power) {
  return Math.pow(num, power)
};

const factorial = function (fact) {

  if (fact == 0 || fact == 1) {
    return 1;
  }
  let sum = 1
  for (i = 1; i < fact; i++) {
    sum = sum * (i + 1);
  }
  return sum
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
