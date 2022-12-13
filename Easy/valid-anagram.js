"https://leetcode.com/problems/valid-anagram/";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    let occurences = new Map();
    for (let i = 0; i < s.length; i++) {
        occurences.set(s[i], occurences.get(s[i]) + 1 || 1);
    }

    console.log(occurences);
    for (let j = 0; j < t.length; j++) {
        if (occurences.get(t[j]) >= 1) {
            occurences.set(t[j], occurences.get(t[j]) - 1);
        } else {
            return false;
        }
    }
    return true;
};
