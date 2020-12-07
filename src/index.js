function sortByLength(strs) {
  return strs.sort(function (a, b) {
    return a.length - b.length;
  });
}
module.exports = sortByLength;
