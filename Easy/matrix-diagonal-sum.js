"https://leetcode.com/problems/matrix-diagonal-sum/";

/**
 * @param {number[][]} mat
 * @return {number}
 * Given a square matrix mat, return the sum of the matrix diagonals.
 * Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 */
var diagonalSum = function (mat) {
    let primarySum = 0,
        secondarySum = 0;
    for (let i = 0; i < mat.length; i++) {
        primarySum += mat[i][i];
        secondarySum += mat[i][mat.length - 1 - i];
    }
    return mat.length % 2 == 0
        ? primarySum + secondarySum
        : primarySum +
              secondarySum -
              mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
};
