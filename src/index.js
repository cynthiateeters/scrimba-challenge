function differentSymbolsNaive(str) {
  const obj = {};
  for (let i = 0; i < str.length; i += 1) {
    obj[str[i]] = true;
  }
  return Object.keys(obj).length;
}
module.exports = differentSymbolsNaive;
