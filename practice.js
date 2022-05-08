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
module.exports = {
  capitalize,
  reverseString,
};
