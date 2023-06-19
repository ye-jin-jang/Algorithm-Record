/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();
    let count = 0;
    for (const i of s) {
        if (map.has(i)) {
            count += 2;
            map.delete(i);
        } else {
            map.set(i, 1);
        }
    }
    return count + (map.size > 0 ? 1 : 0);
};