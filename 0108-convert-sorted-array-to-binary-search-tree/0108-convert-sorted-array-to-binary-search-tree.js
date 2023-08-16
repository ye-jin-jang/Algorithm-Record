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
  const createBst = (left, right)=> {
      if(left > right) return null;
    
      const mid = Math.floor((left+right)/2);
      const currentNode = new TreeNode(nums[mid]);
    
      currentNode.left = createBst(left, mid-1);
      currentNode.right = createBst(mid+1, right);
    
      return currentNode;
  }
  
  return createBst(0, nums.length-1);
};