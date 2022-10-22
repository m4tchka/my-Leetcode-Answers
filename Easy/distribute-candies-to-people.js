"https://leetcode.com/problems/distribute-candies-to-people/";

/**
 * We distribute some number of candies, to a row of n = num_people people in the following way:
 * We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.
 * Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.
 * This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).
 * Return an array (of length num_people and sum candies) that represents the final distribution of candies.
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */

/* 
    Runtime: 83 ms, faster than 77.17% of JavaScript online submissions for Distribute Candies to People.
    Memory Usage: 42.2 MB, less than 26.77% of JavaScript online submissions for Distribute Candies to People.
*/
var distributeCandies = function (candies, num_people) {
    let arr = Array(num_people).fill(0);
    let candiesToGive = 1;
    while (candies > 0) {
        for (let i = 0; i < num_people; i++) {
            if (candies >= candiesToGive) {
                arr[i] += candiesToGive;
            } else {
                candiesToGive = candies;
                arr[i] += candiesToGive;
            }
            candies -= candiesToGive;
            candiesToGive++;
        }
    }
    return arr;
};
