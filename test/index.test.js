const sum = require('../src/index');

/**
 * Test Suite
 */
describe('sum()', () => {
  it('returns value to 2 numbers added together', () => {
    // arrange
    const a = 3;
    const b = 10;

    // act
    const result = sum(a, b);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(13);
  });
});
