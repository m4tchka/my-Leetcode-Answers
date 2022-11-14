"https://leetcode.com/problems/contains-duplicate/description/";

/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

var containsDuplicate = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] ? obj[nums[i]]++ : (obj[nums[i]] = 1);
        if (obj[nums[i]] > 1) {
            return true;
        }
    }
    return false;
};

