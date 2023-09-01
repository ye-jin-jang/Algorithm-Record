/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
  const arr =  nums.map(n => Math.pow(n,2));
  return arr.sort((a,b)=> a-b);
};