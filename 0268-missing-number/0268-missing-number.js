/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const count = nums.length;
  const total = (count * (count + 1)) / 2;
  const sum = nums.reduce((a, b) => a + b);
  
  return total - sum;
};