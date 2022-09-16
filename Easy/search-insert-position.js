"https://leetcode.com/problems/search-insert-position"

/* 
    Notes: Surprisingly fast ?!

    Runtime: 62 ms, faster than 94.20% of JavaScript online submissions for Search Insert Position.
    Memory Usage: 42.3 MB, less than 48.63% of JavaScript online submissions for Search Insert Position.

    Check if the array already includes the target, and returns its index if it does
    Else check if the target would go before the first entry, or after the last entry and return 0 or length respectively
    Else loop through the array, checking each entry and the next entry if target would go between them, and return that index.
*/

var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        if (nums[0] > target) {
            return 0;
        } else if (nums[nums.length - 1] < target) {
            return nums.length;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] < target && nums[i + 1] > target) {
                    return i + 1;
                }
            }
        }
    }
};
