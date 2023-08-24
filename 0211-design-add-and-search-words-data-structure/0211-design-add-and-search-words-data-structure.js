
const WordDictionary = function() {
  this.array = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let root = this.array;
  
  for (let i = 0; i < word.length; i++) {
    if (!root[word[i]]) {
      root[word[i]] = {};
    }
    root = root[word[i]];
  }
  
  root.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const dfs = (node, index) => {
    if (index === word.length) return node.isEnd === true; 
    if (word[index] === ".") {
      for (const key in node) {
        if (dfs(node[key], index + 1)) {
          return true;
        }
      }
    }
    if (node[word[index]]) {
      return dfs(node[word[index]], index + 1);
    }
    
    return false;
  }
  
  return dfs(this.array, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */