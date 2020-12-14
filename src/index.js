function extractEachKth(nums, index) {
    //  write code here.
    return nums.filter((num,i) => (i+1) % index);
}
module.exports = extractEachKth;
