"https://leetcode.com/problems/ransom-note";

/* 
    Notes: Fairly simple solution

    Runtime: 118 ms, faster than 68.81% of JavaScript online submissions for Ransom Note.
    Memory Usage: 44.7 MB, less than 64.92% of JavaScript online submissions for Ransom Note.

    Loop through magazine, creating  an object of letters, with each letter as key, and quantity as value, representing available letters with which to make the note
    Loop through ransomNote, decrementing each letter from available as it occurs.
    If an unavailable letter is encountered, return false.
    Else return true.
*/

var canConstruct = function (ransomNote, magazine) {
    let available = {};
    for (let i = 0; i < magazine.length; i++) {
        if (!available[magazine[i]]) {
            available[magazine[i]] = 1;
        } else {
            available[magazine[i]]++;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (available[ransomNote[i]]) {
            available[ransomNote[i]]--;
        } else {
            return false;
        }
    }
    return true;
};
