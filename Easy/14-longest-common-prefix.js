"https://leetcode.com/problems/longest-common-prefix/";
/**
 * @param {string[]} strs
 * @return {string}
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */
var longestCommonPrefix = function (strs) {
    let commonCharCount = Infinity;
    let commonStr = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let currCommonChars = 0;
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] == commonStr[j]) {
                currCommonChars++;
            } else break;
        }
        commonCharCount = Math.min(currCommonChars, commonCharCount);
        commonStr = commonStr.substring(0, commonCharCount);
        if (commonCharCount == 0) {
            return "";
        }
    }
    return commonStr;
};
