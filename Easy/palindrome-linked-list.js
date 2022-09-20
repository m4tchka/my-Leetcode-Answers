"https://leetcode.com/problems/palindrome-linked-list";

/*  
    Notes: Fairly slow & unsophisticated ...

    Runtime: 259 ms, faster than 33.68% of JavaScript online submissions for Palindrome Linked List.
    Memory Usage: 77.8 MB, less than 58.14% of JavaScript online submissions for Palindrome Linked List. 

    Creates an array from first traversal of the linked list
    Then loops through the array to the middle, checking if the corresponding entry (from the end backwards) matches
    If one doesn't match, return false, else true.

    REVIEW: Could instead traverse linked list, find length, make a STACK, and then at mid point, start taking from stack
    If the last entry in that stack, at a given point doesn't equal the current.val, return false.
*/

var isPalindrome = function (head) {
    let arr = [head.val];
    let current = head;
    while (current.next) {
        current = current.next;
        arr.push(current.val);
    }
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
