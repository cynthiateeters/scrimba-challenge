import { sum, subtract } from "../src/index"; //using the ES6 modules

/**
 * Test Suite
 */
describe("sum()", () => {
  it("returns value to 2 numbers added together", () => {
    // arrange
    const a = 3;
    const b = 10;

    // act
    const result = sum(a, b);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(13);
  });
});
describe("subtract()", () => {
  it("returns value of one number subtracted from other", () => {
    // arrange
    const a = 13;
    const b = 10;

    // act
    const result = subtract(a, b);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(3);
  });
});
