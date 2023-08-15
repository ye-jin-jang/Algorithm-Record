/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const a = x.toString();
  const len = a.length;
  const mid = Math.floor(len / 2);
  
  for (let i = 0; i < mid; i++) {
    if (a[i] !== a[len - 1 - i]) {
      return false;
    }
  }
  
  return true;
};