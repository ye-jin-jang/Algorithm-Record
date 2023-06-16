/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    for (const item of magazine) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }
    for (const item of ransomNote) {
        if (map.get(item)) {
            map.set(item, map.get(item) - 1);
        } else  {
            return false;
        }
    }
    return true;
};