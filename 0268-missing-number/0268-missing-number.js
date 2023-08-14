/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const sortNums = nums.map((i) => String(i)).sort((a,b) => a - b);
  console.log(sortNums);
  const numsCount = sortNums.length;
  for (let i = 0; i <= numsCount; i++) {
    if (i != sortNums[i]) {
      console.log(i, sortNums[i])
      return i;
    }
  }
  return 
};