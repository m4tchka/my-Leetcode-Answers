"https://leetcode.com/problems/fizz-buzz/description/"

/* 
    Notes: Practice Ternary operator more, when using the Not (!) operator with any operator except Equal to (==) or Strictly Equal to (===), need to wrap the whole conition statement with parentheses and put Not operator before the opening parenthesis.

    Runtime: 76 ms, faster than 87.74% of JavaScript online submissions for Fizz Buzz.
    Memory Usage: 44.3 MB, less than 73.67% of JavaScript online submissions for Fizz Buzz.

    Simply push to the array a string, which is checked through 3 conditions. (Ternary operator chaining)

*/

var fizzBuzz = function(n) {
    let arr=[]
    for(let i=1;i<=n;i++) {
        arr.push((!(i%3) && !(i%5)) ? "FizzBuzz"
                    : !(i%3) ? "Fizz"
                    : !(i%5) ? "Buzz"
                    : String(i))
    }
    return arr
};