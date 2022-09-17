"https://leetcode.com/problems/middle-of-the-linked-list/";

/* 
    Notes: Slow solution - Learn linked lists 

    Runtime: 66 ms, faster than 88.09% of JavaScript online submissions for Middle of the Linked List.
    Memory Usage: 42.2 MB, less than 27.38% of JavaScript online submissions for Middle of the Linked List.

    First while loop checks that the current node has a next property (i.e. is not a tail)
    While this is true, increment the node counter and move on to the next node.
    Calculate the middle by checking if count is even, if it is, halve and add 1, else halve and round up.
    Traverse the list again, up to the middle position using a for loop then return the node at the middle position
*/
var middleNode = function (head) {
    let count = 1;
    let current = head;
    while (current.next) {
        count++;
        current = current.next;
    }
    let middle = (count / 2) % 1 == 0 ? count / 2 + 1 : Math.ceil(count / 2);
    let curr = head;
    for (let i = 1; i < middle; i++) {
        curr = curr.next;
    }
    return curr;
};
