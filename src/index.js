function arrayPreviousLess(nums) {
  return nums.map((num, indx, nums) => {
    let val = -1;
    for (let i = 0; i < indx; i += 1) {
      if (nums[i] < num) {
        val = nums[i];
      }
    }
    return val;
  });
}

export { arrayPreviousLess };
