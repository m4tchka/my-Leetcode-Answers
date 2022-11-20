"https://leetcode.com/problems/reverse-vowels-of-a-string/";

/**
 * @param {string} s
 * @return {string}
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */
var reverseVowels = function (s) {
    let arr = s.split("");
    let q = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                q.push(arr[i]);
                arr[i] = "xx";
                break;
            default:
                break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "xx") {
            arr[i] = q.pop();
        }
    }
    return arr.join("");
};
