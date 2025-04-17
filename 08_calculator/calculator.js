const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	if (arr.length == 0) return 0
  if (arr.length == 1) return arr[0]

  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
};

const multiply = function(arr) {
  let total = 1

  for (let i = 0; i < arr.length; i++) {
    total *= arr[i]
  }

  return total
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
	if (a == 0) return 1
  
  let factoredNum = 1

  for (let i = 1; i <= a; i++) {
    factoredNum *= i
  }

  return factoredNum
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
