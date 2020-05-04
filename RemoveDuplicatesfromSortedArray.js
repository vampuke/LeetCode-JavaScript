/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index++] = nums[i];
        }
    }
    return index;
};


/*
Runtime: 76 ms, faster than 72.06% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 36.9 MB, less than 88.86% of JavaScript online submissions for Remove Duplicates from Sorted Array.
*/