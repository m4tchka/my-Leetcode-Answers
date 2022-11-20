"https://leetcode.com/problems/lucky-numbers-in-a-matrix/";

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
 * A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
 */
var luckyNumbers = function (matrix) {
    let row = [],
        maxArr = [];
    let min = Infinity;
    for (let i = 0; i < matrix.length; i++) {
        min = Math.min(...matrix[i]);
        row.push(min);
    }
    let j = 0;
    while (j < matrix[0].length) {
        let col = [];
        for (let i = 0; i < matrix.length; i++) {
            col.push(matrix[i][j]);
        }
        maxArr.push(Math.max(...col));
        j++;
    }
    let set = new Set(row);
    let res = [];
    for (let i = 0; i < maxArr.length; i++) {
        if (set.has(maxArr[i])) {
            res.push(maxArr[i]);
        }
    }
    return res;
};
