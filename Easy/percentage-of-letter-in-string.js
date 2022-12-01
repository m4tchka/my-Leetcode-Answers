"https://leetcode.com/problems/percentage-of-letter-in-string";

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 * Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.
 */
var percentageLetter = function (s, letter) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === letter) count++;
    }
    return Math.floor((count * 100) / s.length);
};
