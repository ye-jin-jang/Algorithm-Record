/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
  const answer = new Array(temp.length).fill(0);
  const stack = [];
  
  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temp[i];
    
    while (stack.length && temp[stack[stack.length - 1]] < currentTemp) {
      prevDay = stack.pop();
      answer[prevDay] = i - prevDay;
    }
    
    stack.push(i);
  }

  return answer;
};

