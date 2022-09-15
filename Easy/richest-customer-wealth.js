"https://leetcode.com/problems/richest-customer-wealth";

/*  Notes:

    WARNING: Extremely slow, uses 2 x reduce (a higher order function)

    Runtime: 93 ms, faster than 45.15% of JavaScript online submissions for Richest Customer Wealth.
    Memory Usage: 41.9 MB, less than 84.73% of JavaScript online submissions for Richest Customer Wealth.

    FIXME: Attemped nested reduce, but didn't work. 
    This solution loops through the outermost array (of customers); 
    at each entry it reduces that array(of each customer's accounts) to the sum of its entries and assigns the entry to be that sum instead (goes from an array to a number);
    then reduces the outermost array, now an array of numbers, to be only the maximum value, and returns that maximum value.

*/
var maximumWealth = function (accounts) {
    for (let i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((prev, curr) => {
            return prev + curr;
        });
    }
    return accounts.reduce((prev, curr) => {
        return Math.max(prev, curr);
    });
};