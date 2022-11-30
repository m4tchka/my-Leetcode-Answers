"https://leetcode.com/problems/ugly-number";

/**
 * @param {number} n
 * @return {boolean}
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 * Given an integer n, return true if n is an ugly number.
 */
var isUgly = function (n) {
    if (n <= 0) return false;

    while (n != 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else if (n % 3 === 0) {
            n /= 3;
        } else if (n % 5 === 0) {
            n /= 5;
        } else {
            return false;
        }
    }

    return true;
};

// var isUgly = function(n) { // 27
// if (n == 1 || n == 2 ) return true
//     let f = []
//     for (let i = 2; i <= Math.floor(Math.sqrt(n));i ++) { // 5      1,2,3,4,5
//         if (n%i===0 ) {
//             f.push(i)
//             f.push(n/i)
//         }
//     }
//     console.log(f)
    
//     // if (f.length > 3) return false    /// 2,3,5,7,11,13,17...
//     for (let i = 0 ; i < f.length; i++) {  [ 2, 7]
//         if (f[i] %2 ==0 && f[i]!== 2 ) continue
//         if (f[i]!==2 && f[i]!==3 &&f[i]!==5) {
//             return false
//         }
//     }
//     if (f.length == 0) return false
//     return true
// };