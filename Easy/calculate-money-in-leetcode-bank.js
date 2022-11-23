"https://leetcode.com/problems/calculate-money-in-leetcode-bank/"
/**
 * @param {number} n
 * @return {number}
 * Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
 * He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
 * Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
 */
var totalMoney = function (n) {
    let fullWeeks = Math.floor(n / 7); // 28 -> 35 -> 42 -> 49 -> ... (+7)         1
    let remainder = n % 7; // (mondayAmt + (mondayAmt+1) + (mondayAmt+2) + ... )   3
    let mondayAmt = 1; // 1
    let sum = 0;
    if (fullWeeks > 0) {
        for (let i = 1; i <= fullWeeks; i++) {
            sum += (3 + i) * 7;
            mondayAmt++;
        }
    }
    for (let j = 0; j < remainder; j++) {
        sum += mondayAmt + j;
    }
    return sum;
};
