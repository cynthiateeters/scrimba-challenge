function insertDashes(arr) {
  return arr.split(' ').map(string => [...string].join('-')).join(' ');
}

module.exports = insertDashes;
