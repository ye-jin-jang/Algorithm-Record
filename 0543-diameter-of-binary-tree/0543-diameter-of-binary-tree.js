/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
  let count = 0;
  dfs(root);
  return count;
  
  function dfs(root) {
    if (!root) return 0;
    let right = dfs(root.right);
    let left = dfs(root.left);
    count = Math.max(right + left, count);
    return 1 + Math.max(right, left);
  }
};