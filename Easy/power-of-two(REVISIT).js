"https://leetcode.com/problems/power-of-two/"


/**
 * @param {number} n
 * @return {boolean}
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 */
 var isPowerOfTwo = function(n) {
    let sum = 1
    while (sum < n) {
        sum *= 2       
    }
    return sum == n
};
// TODO: Cool solution with AND & operator binary power of 2
// https://leetcode.com/problems/power-of-two/solutions/2726139/js-bit-manipulation-with-explanation/