"https://leetcode.com/problems/number-of-segments-in-a-string/";

/**
 * @param {string} s
 * @return {number}
 * Given a string s, return the number of segments in the string.
 * A segment is defined to be a contiguous sequence of non-space characters.
 */
var countSegments = function (s) {
    return s.split(" ").filter(Boolean).length;
};

// Split the array by spaces into an array
// Filter out empty string entries in that array (which are falsy values)
// Return thea array's length
