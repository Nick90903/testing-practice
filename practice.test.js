const functions = require("./practice");

test("Capitalize first letter", () => {
  expect(functions.capitalize("test")).toBe("Test");
});

test("Reverse String", () => {
  expect(functions.reverseString("reverse")).toBe("esrever");
});

test("Calculator Test", () => {
  expect(functions.calculator.add(1, 3)).toBe(4);
  expect(functions.calculator.subtract(5, 3)).toBe(2);
  expect(functions.calculator.multiply(5, 3)).toBe(15);
  expect(functions.calculator.divide(4, 2)).toBe(2);
});
