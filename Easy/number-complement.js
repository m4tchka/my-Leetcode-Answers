"https://leetcode.com/problems/number-complement/";

/**
 * @param {number} num
 * @return {number}
 * The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
 * For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
 * Given an integer num, return its complement.
 */

var findComplement = function (num) {
    let arr = num.toString(2).split("");
    for (let i = 0; i < arr.length; i++) {
        arr[i] === "0" ? (arr[i] = 1) : (arr[i] = 0);
    }
    return parseInt(arr.join(""), 2);
};
