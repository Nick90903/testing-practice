function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
}

function reverseString(string) {
  let temp = string.split("");
  let returntemp = "";
  for (let i = temp.length - 1; i >= 0; i--) {
    returntemp = returntemp + temp[i];
    console.log(returntemp);
  }
  return returntemp;
}

//Calculator functions
function add(a, b) {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// Bundlees above functions for calculator
const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
};
