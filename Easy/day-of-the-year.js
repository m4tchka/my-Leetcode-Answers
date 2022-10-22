"https://leetcode.com/problems/day-of-the-year/";

/**
 * Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.
 * @param {string} date
 * @return {number}
 */

/* 
    NOTE: straightforward - use SUBSTRING (start, end? [half-open range]) instead of SUBSTR (which is deprecated and less intuitive, start, length)

    Runtime: 318 ms, faster than 60.56% of JavaScript online submissions for Day of the Year.
    Memory Usage: 51.6 MB, less than 43.66% of JavaScript online submissions for Day of the Year.
*/

var dayOfYear = function (date) {
    let ly = false;
    let year = Number(date.substring(0, 4));
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        ly = true;
    }
    let months = Number(date.substring(5, 7));
    let monthDays = [31, ly ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayNum = Number(date.substring(8));
    for (let i = 0; i < months - 1; i++) {
        dayNum += monthDays[i];
    }
    return dayNum;
};

/* 
    Assume not a leap year, unless it's divisible by 4 and not by 100 (a century) except if that centurial year is divisible by 400
    Find the number of months in the string and loop through an array of numbers of days in each month, up to but not including the current month, to get the number of days in all previous months
    Add the number of days into the current month and return.
*/