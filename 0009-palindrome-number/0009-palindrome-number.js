/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  let a = x.toString();
  let reverse = a.split("").reverse().join("");
  
  return a === reverse
  

};