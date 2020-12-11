function adjacentElementsProduct(nums) {
  let biggest = 0;
  nums.forEach((num, index, nums) => {
    if (index == 0) return;
    product = num * nums[index - 1];
    biggest = product > biggest ? product : biggest;
  });
  return biggest;
}

module.exports = adjacentElementsProduct;
