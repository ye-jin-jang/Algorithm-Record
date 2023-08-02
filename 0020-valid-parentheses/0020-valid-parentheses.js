/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const characters = {
    "(" : ")",
    "{" : "}",
    "[" : "]",
  }
  
  if (s.length % 2 === 1) return false;
  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;
  if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (characters[stack.pop()] !== s[i]) {
      return false;
    }
  }
  
  return stack.length === 0;
};