/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
             map.set(nums[i], 1);
         }
         else return true;
    }
    return false;
};