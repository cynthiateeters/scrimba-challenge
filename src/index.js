function countVowelConsonant(str) {
  return str
    .toLowerCase()
    .split('')
    .reduce((acc, current) => {
      if ('aeiou'.includes(current)) {
        acc += 1;
      } else {
        acc += 2;
      }
      return acc;
    }, 0);
}
module.exports = countVowelConsonant;
