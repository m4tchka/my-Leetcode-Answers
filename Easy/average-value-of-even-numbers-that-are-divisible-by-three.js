"https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/";

/**
 * @param {number[]} nums
 * @return {number}
 * Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.
 * Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
 */
var averageValue = function (nums) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 6 === 0) {
            sum += nums[i];
            count++;
        }
    }
    return Math.floor(sum / count) || 0;
};
