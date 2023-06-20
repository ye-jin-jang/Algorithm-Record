/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = Math.floor(nums.length / 2);
    const obj = {};

    if (nums.length <= 2) return nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if (obj[nums[i]] > n) return nums[i];
    }
};