const differentSymbolsNaive = require('../src/index');

/**
 * Test Suite
 */
describe('differentSymbolsNaive() Simple', () => {
  it('returns count of unique characters', () => {
    // arrange
    const str = 'cabca';

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(3);
  });
});

describe('differentSymbolsNaive() More Complex', () => {
  it('returns count of unique characters', () => {
    // arrange
    const str = '¡§±±±Ğ±±ÆÆÆ';

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(5);
  });
});
