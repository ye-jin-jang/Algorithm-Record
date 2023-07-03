/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let index = 0;
    const sResult = [];
    const tResult = [];
    
    while (index < s.length || index < t.length) {
        if (index < s.length) {
            if (s[index] === "#") {
            sResult.pop();
            } else {
            sResult.push(s[index]);
            }
        } 
        if (index < t.length) {
            if (t[index] === "#") {
                tResult.pop();
            } else {
                tResult.push(t[index]);
            }
        }
        index += 1;
    }
    
    return sResult.join('') === tResult.join('');
};