"https://leetcode.com/problems/recyclable-and-low-fat-products"

/* 
    Notes: Self explanatory ...

    Runtime: 898 ms, faster than 21.71% of MySQL online submissions for Recyclable and Low Fat Products.
    Memory Usage: 0B, less than 100.00% of MySQL online submissions for Recyclable and Low Fat Products.
*/

SELECT product_id FROM products 
WHERE low_fats = "Y" 
    AND recyclable = "Y";

