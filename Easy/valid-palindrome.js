"https://leetcode.com/problems/valid-palindrome/";

/**
 * @param {string} s
 * @return {boolean}
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/* 
    NOTE: Learn Regex again ... 
*/

var isPalindrome = function (s) {
    let r = /[^A-Za-z0-9]/g;
    s = s.replace(r, "").toLowerCase();
    console.log(s);
    for (let i = 0; i <= Math.floor(s.length / 2) - 1; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
};
function palindrome(str) {
    return (
        str.toLowerCase().replace(/\W|_/g, "").split("").reverse().join("") ==
        str.toLowerCase().replace(/\W|_/g, "")
    );
}
