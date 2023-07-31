const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test(`Shuffle returns an array`, () => {
    expect(Array.isArray(shuffle())).toBe(true)
    expect(Array.isArray(shuffle([1, 2, 3, 4]))).toBe(true)
  })
  test(`Shuffle returns an array of the same length as the argument array sent in`, () => {
    expect(shuffle([1, 2, 3, 4]).length).toBe(4)
  })
});