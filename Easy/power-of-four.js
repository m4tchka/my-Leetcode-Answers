"https://leetcode.com/problems/power-of-four/description/";

/**
 * @param {number} n
 * @return {boolean}
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 * An integer n is a power of four, if there exists an integer x such that n == 4x.
 */
var isPowerOfFour = function (n) {
    return (Math.log(n) / Math.log(4)) % 1 == 0;
};
