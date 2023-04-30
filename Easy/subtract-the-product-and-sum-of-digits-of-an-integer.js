"https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/";

/**
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 * @param {number} n
 * @return {number}
 */

/* 
    NOTE: Straightforward ?

    Runtime: 100 ms, faster than 33.27% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
    Memory Usage: 42.2 MB, less than 39.67% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
*/
var subtractProductAndSum = function (n) {
    let arr = n.toString().split("").map(Number);
    let prod = arr.reduce((prev, curr) => {
        return prev * curr;
    });
    let sum = arr.reduce((prev, curr) => {
        return prev + curr;
    });
    return prod - sum;
};
/* 
    Convert n to an array of its digits
    Reduce the array to the product of its entries & store it as variable prod
    Reduce the array to the sum of its entries & store it as variable sum
    Return the difference of prod and sum
*/
var subtractProductAndSum = function (n) {
    str = n.toString();
    let [sum, prod] = [0, 1];
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
        prod *= Number(str[i]);
    }
    return prod - sum;
};
/* 
    Convert n to a string so that it can be looped through using a for loop on it's indexes.
    Create variables for sum and product, loop through the string and add and multiply each number to its respective variable
    Return the difference
*/