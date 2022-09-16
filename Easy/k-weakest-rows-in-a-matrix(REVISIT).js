"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix";

/* 
Notes: :WARNING: EXTREMELY SLOW SOLUTION 

Runtime: 120 ms, faster than 18.67% of JavaScript online submissions for The K Weakest Rows in a Matrix.
Memory Usage: 43.8 MB, less than 86.13% of JavaScript online submissions for The K Weakest Rows in a Matrix.

Loops through the first level array (each entry is a row), and turns each array
into the count of soldiers (since they're sorted, could be just index of first 0)
(mat is now an array of numbers)
Then compute the min and the max of mat, find the index of the min, push that index to list
Then, to prevent that index being found again on the next while loop, add the max value, + 1 (to avoid min = 0 cases) to that value.
This continues until the list is of length k, then returns that list of indexes, ordered.
*/

var kWeakestRows = function (mat, k) {
    let list = [];
    for (let i = 0; i < mat.length; i++) {
        mat[i] = mat[i].reduce((prev, curr) => {
            return prev + curr;
        });
    }
    while (list.length < k) {
        let min = Math.min(...mat);
        let max = Math.max(...mat);
        let indexOfMin = mat.indexOf(min);
        mat[indexOfMin] = min + max + 1;

        list.push(indexOfMin);
    }
    return list;
};
