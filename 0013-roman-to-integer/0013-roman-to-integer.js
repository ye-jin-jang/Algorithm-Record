/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbol = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "I" && s[i + 1] == "V" || s[i] == "I" && s[i + 1] == "X") {
            result -= 1;
        }
        else if (s[i] == "X" && s[i + 1] == "L" || s[i] == "X" && s[i + 1] == "C") {
            result -= 10;
        }
        else if (s[i] == "C" && s[i + 1] == "D" || s[i] == "C" && s[i + 1] == "M") {
            result -= 100;
        }
        else {
            result += symbol[s[i]];
        }
    }
    return result;
};