"https://leetcode.com/problems/sort-array-by-parity";

/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
 * Return any array that satisfies this condition.
 */
var sortArrayByParity = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            arr.unshift(nums[i]);
        } else {
            arr.push(nums[i]);
        }
    }
    return arr;
};
