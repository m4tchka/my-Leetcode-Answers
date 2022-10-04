"https://leetcode.com/problems/power-of-three/submissions/";

/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 * @param {number} n
 * @return {boolean}
 */

/* 
    NOTE: Doesn't account for negative/ fractional powers

    Runtime: 394 ms, faster than 26.87% of JavaScript online submissions for Power of Three.
    Memory Usage: 51.1 MB, less than 58.43% of JavaScript online submissions for Power of Three.
*/
var isPowerOfThree = function (n) {
    if (n <= 0) {
        return false;
    } else if (n == 1) {
        return true;
    } else {
        return divideBy3(n);
    }
};

function divideBy3(n) {
    if (n == 3) {
        return true;
    } else if (n % 3 == 0) {
        return divideBy3(n / 3);
    } else {
        return false;
    }
}

/* 
    If n is negative or 0, immediately return false since raising 3 to any exponent will never give a negative number or 0.
    If n is 1, return true since any number raised to exponent of 0 will always equal 1
    Else call the function divideBy3

    If n is 3, return true since that shows the original number was a power of 3
    Else if dividing the number by 3 leaves no remainder, call the function again with n/3 (n is still to large to tell) 
    Else if there is a remainder (i.e. n/3 equals a fractional number) return false since that number cannot be a power of 3.
*/