function centuryFromYear(year) {
  const century = year / 100;
  if (year % 100) {
    return Math.floor(century) + 1;
  } else {
    return century;
  }
}
module.exports = centuryFromYear;
