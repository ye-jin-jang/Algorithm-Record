/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length > b.length) {
        b = b.padStart(a.length, "0");
    } else {
        a = a.padStart(b.length, "0");
    }
    
    let max = a.length;
    let result = "";
    let roundUpCount = 0;
    
    for (let i = max - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + roundUpCount;
        result = (sum % 2) + result;
        roundUpCount = sum >= 2 ? 1 : 0;
        
    }
    
    if (roundUpCount) {
        result = "1" + result;
    }

    return result;
};