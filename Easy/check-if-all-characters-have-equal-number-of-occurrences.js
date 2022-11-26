"https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/";

/**
 * @param {string} s
 * @return {boolean}
 * Given a string s, return true if s is a good string, or false otherwise.
 * A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
 */
var areOccurrencesEqual = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    let val = [];
    for (let [_, value] of map) {
        val.push(value);
    }
    return new Set(val).size === 1;
};
