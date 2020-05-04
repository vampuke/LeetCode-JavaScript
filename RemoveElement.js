/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] == val) {
            nums.splice(i, 1);
        }
    }
};

/*
Runtime: 52 ms, faster than 96.47% of JavaScript online submissions for Remove Element.
Memory Usage: 33.7 MB, less than 94.19% of JavaScript online submissions for Remove Element.
*/