/**
 * @param {number} n
 * @return {number}
 */
let result = [];
var climbStairs = function(n) {
    if (n < 4) return n;
    if (result[n] !== undefined) return result[n];
    result[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return result[n];
};