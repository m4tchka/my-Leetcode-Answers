"https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/";

/**
 * @param {number[][]} grid
 * @return {number}
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
 *
 */
var countNegatives = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                count++;
            }
        }
    }
    return count;
};

var countNegatives = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] < 0) {
            count += (grid.length - i) * grid[i].length;
            break;
        }
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                count += grid[i].length - j;
                break;
            }
        }
    }
    return count;
};
