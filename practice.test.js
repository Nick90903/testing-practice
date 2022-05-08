const functions = require("./practice");

test("Capitalize first letter", () => {
  expect(functions.capitalize("test")).toBe("Test");
});

test("Reverse String", () => {
  expect(functions.reverseString("reverse")).toBe("esrever");
});
