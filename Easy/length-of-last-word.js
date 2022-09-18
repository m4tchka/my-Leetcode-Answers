"https://leetcode.com/problems/length-of-last-word";

/* 
    Notes: Revise RegEx  

    Runtime: 90 ms, faster than 49.45% of JavaScript online submissions for Length of Last Word.
    Memory Usage: 41.7 MB, less than 91.65% of JavaScript online submissions for Length of Last Word.

    wsRegex matches whitespace at the start and/or end of the string.
    Then alter the string by replacing whitespace matched with wsRegex with a empty string (i.e. remove it)
    ws2Regex matches whitespace that is repeated AT LEAST 2 TIMES IN A ROW
    Alter the string again by replacing whitespace matched with ws2Regex with a SINGLE WHITESPACE CHARACTER.
    Split the string by it's whitespace (i.e. split it into words) and store it as the variable "arr"
    Return the length of the last entry in "arr"
*/
var lengthOfLastWord = function (s) {
    wsRegex = /^\s+|\s+$/gi;
    s = s.replace(wsRegex, "");
    ws2Regex = /\s{2,}/;
    s = s.replace(ws2Regex, " ");
    let arr = s.split(" ");
    return arr[arr.length - 1].length;
};

// Trimmed down ver of above, removing wsRegex, ws2Regex variables and not mutating s twice
var lengthOfLastWord = function (s) {
    let arr = s
        .replace(/^\s+|\s+$/g, "")
        .replace(/\s{2,}/, " ")
        .split(" ");
    return arr[arr.length - 1].length;
};
