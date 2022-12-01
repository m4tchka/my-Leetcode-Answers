"https://leetcode.com/problems/repeated-substring-pattern/";

/**
 * @param {string} s
 * @return {boolean}
 * Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 */
var repeatedSubstringPattern = function (s) {
    twoS = s + s; // ss
    return twoS.substring(1, twoS.length - 1).includes(s);
};
