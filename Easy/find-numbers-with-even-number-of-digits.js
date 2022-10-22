"https://leetcode.com/problems/find-numbers-with-even-number-of-digits";

/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * @param {number[]} nums
 * @return {number}
 */
/* 
    Runtime: 64 ms, faster than 97.05% of JavaScript online submissions for Find Numbers with Even Number of Digits.
    Memory Usage: 41.7 MB, less than 99.70% of JavaScript online submissions for Find Numbers with Even Number of Digits.
*/

var findNumbers = function (nums) {
    return nums.filter((e) => {
        return e.toString().length % 2 == 0;
    }).length;
};
