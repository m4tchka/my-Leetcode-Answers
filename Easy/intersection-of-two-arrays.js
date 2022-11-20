"https://leetcode.com/problems/intersection-of-two-arrays/"

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 */
 var intersection = function(nums1, nums2) {
    let res = new Set 

    let s = new Set(nums2) // 2
    for (let i = 0 ; i < nums1.length ; i ++ ) {
        if (s.has(nums1[i])) { 
            res.add(nums1[i])
        }
    }
    return Array.from(res)

};