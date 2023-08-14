/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const sortNums = nums.sort((a,b) => a - b);
  const numsCount = sortNums.length;
  for (let i = 0; i <= numsCount; i++) {
    if (i !== sortNums[i]) {
      console.log(i, sortNums[i])
      return i;
    }
  }
  return 
};