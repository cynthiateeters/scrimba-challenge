function depositProfit(deposit, rate, threshold) {
  let acc = deposit;
  let count = 0;
  rate = rate / 100 + 1;
  while (acc < threshold) {
    count++;
    acc *= rate;
  }
  return count;
}

module.exports = depositProfit;
