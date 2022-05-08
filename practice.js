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

function cipher(string) {
  let temparr = string.split("");
  console.log(temparr);
  let convertedarr = [];

  temparr.forEach((letter) => {
    let charcode = letter.charCodeAt();
    convertedarr.push(String.fromCharCode(charcode + 1));
  });

  return convertedarr.join("");
}

function analyzeArray(_arr) {
  let temp = _arr.sort();
  let min = temp[0];
  let max = temp[temp.length - 1];
  let average = temp.reduce((partialSum, a) => partialSum + a, 0) / temp.length;
  let length = temp.length;

  return { min, max, average, length };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  cipher,
  analyzeArray,
};
