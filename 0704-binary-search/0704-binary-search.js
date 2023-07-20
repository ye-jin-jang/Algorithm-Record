/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let heig = nums.length - 1;
  
  while (low < heig) {
    let mid = low + Math.floor(heig - low / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      heig = mid - 1;
    }
  }
  
  return nums[low] === target ? low : -1;
};