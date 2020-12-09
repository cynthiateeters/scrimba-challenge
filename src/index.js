function sumOddFibonacciNumbers(num) {
  const fibs = [0, 1];
  let newFib = 0;
  let total = 1;

  while (true) {
    newFib = fibs[1] + fibs[0];
    if (newFib > num) break;
    fibs[0] = fibs[1];
    fibs[1] = newFib;
    if (newFib % 2) {
      total += newFib;
    }
  }
  return total;
}

module.exports = sumOddFibonacciNumbers;
