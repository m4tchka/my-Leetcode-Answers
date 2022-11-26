"https://leetcode.com/problems/capitalize-the-title/";

/**
 * @param {string} title
 * @return {string}
 * You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:
 * If the length of the word is 1 or 2 letters, change all letters to lowercase.
 * Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
 * Return the capitalized title.
 */
var capitalizeTitle = function (title) {
    let arr = title.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= 2) {
            arr[i] = arr[i].toLowerCase();
        } else {
            arr[i] =
                arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
        }
    }
    return arr.join(" ");
};
