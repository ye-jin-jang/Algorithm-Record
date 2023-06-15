/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1;
        let hig = n;

        while (low <= hig) {
            let mid = Math.floor((low + hig) / 2);
            if (!isBadVersion(mid)) {
                low = mid + 1;
            }
            else {
                hig = mid - 1;
            }
        }
        return low;
    };
};