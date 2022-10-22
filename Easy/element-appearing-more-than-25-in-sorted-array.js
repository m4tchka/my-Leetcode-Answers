"https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/";

/**
 * Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
 * @param {number[]} arr
 * @return {number}
 */

/* 
    Runtime: 148 ms, faster than 12.50% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
    Memory Usage: 49.2 MB, less than 14.45% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
*/
var findSpecialInteger = function (arr) {
    let occurences = arr.reduce((prv, cur) => {
        prv[cur] ? prv[cur]++ : (prv[cur] = 1);
        return prv;
    }, {});
    for (let key in occurences) {
        if (occurences[key] > arr.length / 4) {
            return key;
        }
    }
};

/* 
    Reduce the array into an object, where each key is a distinct value that appears in the array at least once,and that key's value is the number of times it appears. 
    Then loop through the object's keys and return the one that is at least 25% of the array length.
 */
