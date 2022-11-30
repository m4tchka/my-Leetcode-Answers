"https://leetcode.com/problems/arranging-coins";

/**
 * @param {number} n
 * @return {number}
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
 * Given the integer n, return the number of complete rows of the staircase you will build.
 */
var arrangeCoins = function (n) {
    let rows = 0;
    while (n > rows) {
        n -= ++rows;
    }
    return rows;
};
