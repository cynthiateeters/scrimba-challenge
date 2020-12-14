function arrayMaximalAdjacentDifference(nums) {
    //  write code here.
    function reducer(accumulator, currentValue, currentIndex, array){
      currentIndex -= 1;
      if (currentIndex < 0 ) return accumulator;
      let diff = Math.abs(currentValue - array[currentIndex])
      return diff > accumulator ? diff : accumulator;
    }
    return nums.reduce(reducer, 0);
}
module.exports = arrayMaximalAdjacentDifference;
