function chunkyMonkey(values, size) {
  const outArr = [];

  for (i = 0; i < values.length; i += size) {
    outArr.push(values.slice(i, i + size));
  }
  return outArr;
}

module.exports = chunkyMonkey;
