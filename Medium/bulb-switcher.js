"https://leetcode.com/problems/bulb-switcher/submissions/852279095/";
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    if (n === 0) return 0;
    let currSq = 1;
    while ((currSq + 1) ** 2 <= n) {
        console.log({ currSq });
        currSq++;
    }
    return currSq;
};
// Number of bulbs left on is simply HOW MANY square numbers there are from 0 to (including) n.
// Only square numbers have an ODD number of factors - so they are toggled an odd number of times. ( 8 toggled at loops [1,2,4,8] vs 16 at [1,2,4,8,16] )
// Since they start at off, this means at the end bulbs at those positions are left toggled on at the end.
var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};
