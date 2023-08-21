/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  return calcurate(0, nums.length - 1);
  
  function calcurate(low, high) {
    if (low > high) return null;
    
    let mid = Math.floor((high + low) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = calcurate(low, mid - 1);
    root.right = calcurate(mid + 1, high);
  
    return root;
  }
};