function sumOfTwo(nums1, nums2, value) {
  //  write code here.
  return nums1.some((element) =>
    nums2.some((element2) => element + element2 == value)
  );
}

export { sumOfTwo };
