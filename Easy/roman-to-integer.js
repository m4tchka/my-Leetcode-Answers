"https://leetcode.com/problems/roman-to-integer"

/* 
    Notes: EXTREMELY manual solution
    
    Runtime: 185 ms, faster than 67.58% of JavaScript online submissions for Roman to Integer.
    Memory Usage: 46.8 MB, less than 77.81% of JavaScript online submissions for Roman to Integer.

    For each of the 3 Numerals (I,X,C) which MAY come before 1 of 2 larger Numerals, check if the next Numeral IS NOT one of those 2. If it is one of those 2 possible numerals, then do not increment the count (i.e. leave that to be accounted for in the next loop). If it is not, then add its value to the total. Then, at the larger Numeral add it to the value and, check the previous Numeral and if it is one of the 3 Numerals (I,X,C), then subtract that value. 
*/

var romanToInt = function (s) {
    let count = 0;
    let arr = s.split(""); // [I,I,I]  [L,v,I]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "I" && arr[i + 1] != "V" && arr[i + 1] != "X") {
            count++;
        } else if (arr[i] == "V") {
            count += 5;
            if (arr[i - 1] == "I") {
                count--;
            }
        } else if (arr[i] == "X" && arr[i + 1] != "L" && arr[i + 1] != "C") {
            count += 10;
            if (arr[i - 1] == "I") {
                count--;
            }
        } else if (arr[i] == "L") {
            count += 50;
            if (arr[i - 1] == "X") {
                count -= 10;
            }
        } else if (arr[i] == "C" && arr[i + 1] != "D" && arr[i + 1] != "M") {
            count += 100;
            if (arr[i - 1] == "X") {
                count -= 10;
            }
        } else if (arr[i] == "D") {
            // No D testcase but for completion
            count += 500;
            if (arr[i - 1] == "C") {
                count -= 100;
            }
        } else if (arr[i] == "M") {
            count += 1000;
            if (arr[i - 1] == "C") {
                count -= 100;
            }
        }
    }
    return count;
};
