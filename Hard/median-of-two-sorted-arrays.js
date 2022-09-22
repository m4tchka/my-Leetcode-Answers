"https://leetcode.com/problems/median-of-two-sorted-arrays/";

/* 
    Notes: Slow SOLUTION

    Runtime: 244 ms, faster than 15.48% of JavaScript online submissions for Median of Two Sorted Arrays.
    Memory Usage: 46.7 MB, less than 75.15% of JavaScript online submissions for Median of Two Sorted Arrays.

    Store sorted array as arr
    Create 2 variables which are the indexes of nums1 and num2 that are to be compared.
    First while loop:
        ONLY EXECUTES WHEN THERE IS OVERLAP IN THE ARRAYS, AT THE START - Happens min(nums1length,nums2 length times)
        Checks finds the smaller of the 2 currently selected numbers from each array, pushes that to arr, and increment corresponding index
        If the 2 numbers are the same, default to nums1[n1I]
    When 1 of the 2 arrays has no more elements left, then loop through the remaining elements of the other array, sequentially push them to arr
    Finally, compute median of arr and return it.
*/
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [];
    let n1I = 0;
    let n2I = 0;
    while (n1I < nums1.length && n2I < nums2.length) {
        if (nums1[n1I] < nums2[n2I]) {
            arr.push(nums1[n1I]);
            n1I++;
        } else if (nums1[n1I] > nums2[n2I]) {
            arr.push(nums2[n2I]);
            n2I++;
        } else {
            arr.push(nums1[n1I]);
            n1I++;
        }
    }
    while (n1I < nums1.length) {
        arr.push(nums1[n1I]);
        n1I++;
    }
    while (n2I < nums2.length) {
        arr.push(nums2[n2I]);
        n2I++;
    }
    return arr.length % 2 == 0
        ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
        : arr[Math.floor(arr.length / 2)];
};
