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
    
    function dfs(root) {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        count = Math.max(left + right, count);

        return 1 + Math.max(left, right);
    }
    
    dfs(root);

    return count;
};