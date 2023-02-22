"https://leetcode.com/problems/reverse-integer";

/**
 * @param {number} x
 * @return {number}
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */
var reverse = function (x) {
    let xstr = x.toString().split("").reverse().join("");
    xstr = parseInt(xstr);
    if (x < 0) xstr = xstr * -1;
    return xstr > 2147483647 || xstr < -2147483648 ? 0 : xstr;
};
