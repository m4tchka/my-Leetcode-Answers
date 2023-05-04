/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */
var isSubsequence = function (s, t) {
    /// ahbgdc
    let strSet = new Set(s); //  a,b,c
    let strPoint = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[strPoint]) {
            strPoint++;
        } else {
            if (strSet.has(t[i])) {
                return false;
            } else {
                continue;
            }
        }
    }
    return true;
};
// {a,b,c,d} o(s)
/* 
    create a set of unique characters from s
    loop through t , check if the currently selected character is the one that is pointed to by strPoint
        if it is NOT, check if it is in strSet
            if it IS in strSet, (and is not the currently pointed to one) return false
            else continue
    return true
 */
