"https://leetcode.com/problems/contains-duplicate/description/";

/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/* 
    NOTE: Set is much faster - it only has 1 "value" property and there are no keys.
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

var containsDuplicate = function(nums) {
    let s = new Set()
    for (let i = 0; i < nums.length; i ++) {
       if (s.has(nums[i])) {
        return true;
       } else {
        s.add(nums[i]);
       }
    }
    return false
};