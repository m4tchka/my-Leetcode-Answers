"https://leetcode.com/problems/missing-number";

/**
 * @param {number[]} nums
 * @return {number}
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b); // [0, 1, 3]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
    return nums.length;
};

var missingNumber = function(nums) {
    let sum=nums.reduce((acc,cur)=>acc+cur)
    let expectedSum = ((nums.length+1)*nums.length)/2
    return expectedSum - sum
};