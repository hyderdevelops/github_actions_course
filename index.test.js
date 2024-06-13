const { CountTotalElementsInArray, AddTwoNumbers } = require("./index.js");

describe("Index Module", () => {
  test("Add 1+2 equals to 3", () => {
    expect(AddTwoNumbers(1, 2)).toBe(3);
  });

  test("Elements in Array [1,2,3] equals to 3", () => {
    expect(CountTotalElementsInArray([1, 2, 3, 4, 5, 6])).toBe(6);
  });
});
