"https://leetcode.com/problems/running-sum-of-1d-array"

/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */
var runningSum = function(nums) {
    let result = [nums[0]]
    for (let i = 1 ; i < nums.length ; i ++) {
        result.push(nums[i]+result[result.length-1])
    }
    return result
};
var runningSum = function(nums) {
    return nums.reduce((acc,curr,ind)=>{
        acc[ind]=(acc[acc.length-1]+curr);
        return acc
        },[0])
};