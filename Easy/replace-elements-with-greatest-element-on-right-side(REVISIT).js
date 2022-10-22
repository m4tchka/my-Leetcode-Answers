"https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/";

/**
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
 * After doing so, return the array.
 * @param {number[]} arr
 * @return {number[]}
 */

/* 
    NOTE: Very slow/ inefficient - creates a new slice at each iteration of the loop 

    Runtime: 2472 ms, faster than 5.05% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
    Memory Usage: 74.1 MB, less than 5.34% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
*/
var replaceElements = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.max(...arr.slice(i + 1));
    }
    arr[arr.length - 1] = -1;
    return arr;
};

/* 
    Loop through the array, and replace each eleemnt with the largest in the slice of elements after it in the array.
    Replace last element with -1 then return the array.
*/