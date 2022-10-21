"https://leetcode.com/problems/single-number/";

/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * @param {number[]} nums
 * @return {number}
 */

/* 
    Runtime: 917 ms, faster than 6.49% of JavaScript online submissions for Single Number.
    Memory Usage: 43 MB, less than 88.90% of JavaScript online submissions for Single Number.
*/
var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
            return nums[i];
        }
    }
};

/* 
    Check if the index of each entry is the same as the last index of that entry (i.e. there is only a single occurence) and return that number 
*/