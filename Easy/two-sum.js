"https://leetcode.com/problems/two-sum";

/* 
    Notes: Very slow solution

    Runtime: 252 ms, faster than 13.57% of JavaScript online submissions for Two Sum.
    Memory Usage: 42.6 MB, less than 60.62% of JavaScript online submissions for Two Sum.

    2 x for loops through the array of nums and checks if the sum of the numbers at those indexes is the target.
*/

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i != j) {
                let currentSum = nums[i] + nums[j];
                if (currentSum == target) {
                    return [i, j];
                } else {
                    continue;
                }
            } else {
                continue;
            }
        }
    }
};
var twoSum = function (nums, target) {
    let m1 = new Map();
    for (let i = 0; i < nums.length; i++) {
        m1.set(nums[i], i);
    }
    for (let j = 0; j < nums.length; j++) {
        if (m1.has(target - nums[j]) && m1.get(target - nums[j]) != j)
            return [m1.get(target - nums[j]), j];
    }
};
