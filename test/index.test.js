const { expect } = require('@jest/globals');
const chunkyMonkey = require('../src/index');

/**
 * Test Suite
 */
describe('chunkyMonkey()', () => {
  it('splits array into groups the length of size and returns as 2-d array', () => {
    // arrange
    const values = ['a', 'b', 'c', 'd'];
    const size = 2;

    // act
    const result = chunkyMonkey(values, size);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });
});

describe('2nd Test chunkyMonkey()', () => {
  it('splits array into groups the length of size and returns as 2-d array', () => {
    // arrange
    const values = [0, 1, 2, 3, 4, 5];
    const size = 4;

    // act
    const result = chunkyMonkey(values, size);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });
});

/* test('2nd splits array into groups the length of size and returns as 2-d array', () => {
  expect(
    chunkyMonkey([0, 1, 2, 3, 4, 5], 4).toBe([
      [0, 1, 2, 3],
      [4, 5],
    ])
  );
});
 */
