function validTime(str) {
  const subStr = str.split(':');
  const hours = parseInt(subStr[0]);
  const minutes = parseInt(subStr[1]);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return false;
  return true;
}

module.exports = validTime;
