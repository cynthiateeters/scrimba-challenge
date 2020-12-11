function avoidObstacles(nums) {
  let step = 1;
  let test = true;

  while (test) {
    step += 1;
    test = !nums.every((num) => {
      return num % step;
    });
    if (step > 1000) break;
  }
  return step;
}

module.exports = avoidObstacles;
