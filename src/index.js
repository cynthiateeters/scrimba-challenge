function avoidObstacles(nums) {
  const sortedNums = nums.sort((a, b) => {
    return a - b;
  });
  let step = 1;
  let test = true;

  while (test) {
    step += 1;
    let stepNums = [];
    nums.forEach((num, indx) => {
      stepNums.push(indx * step);
    });
    test = !nums.every((num) => {
      return stepNums.every((step) => {
        return num != step;
      });
    });
  }
  return step;
}

module.exports = avoidObstacles;
