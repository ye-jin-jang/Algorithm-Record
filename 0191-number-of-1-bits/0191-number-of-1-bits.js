/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    const str = n.toString(2);
    for (const i of str) {
        if (i === "1") count++;
    }
    return count;
};