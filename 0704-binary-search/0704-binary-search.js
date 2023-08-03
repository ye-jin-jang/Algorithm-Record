/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let low = 0;
  let heig = nums.length - 1;
  
  while (low < heig) {
    let mid = Math.floor(heig - low / 2) + low;
    
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      heig = mid - 1;
    } else {
      low = mid;
    }
  }
  
  return nums[low] === target ? low : -1;
};