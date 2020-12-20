function arrayEquals(a, b) {
  // https://masteringjs.io/tutorials/fundamentals/compare-arrays
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function alphabetSubsequence(str) {
  //  https://codeburst.io/javascript-array-distinct-5edc93501dc4
  const arr = str.split("");
  const distinctArr = [...new Set(arr.sort())];
  return arrayEquals(arr, distinctArr);
}

export { alphabetSubsequence };
