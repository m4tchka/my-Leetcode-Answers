"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero"

/* 
Notes: Very slow
Maybe use recursion idk

Runtime: 100 ms, faster than 30.67% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
Memory Usage: 41.7 MB, less than 88.66% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
*/

var numberOfSteps = function (num) {
    let count = 0;
    while (num > 0) {
        num % 2 == 0
            ? () => {
                  num /= 2;
                  count++;
              }
            : () => {
                  num--;
                  count++;
              };
    }
    return count;
};
