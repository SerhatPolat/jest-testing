const oddEven = require("./oddEven");

test("calculates 7/2 to say 7 is Odd", () => {
  expect(oddEven(7)).toEqual("Odd");
});
