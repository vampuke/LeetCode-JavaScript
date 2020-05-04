/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length || nums[0] > target) return 0;
    let length = nums.length;
    if (nums[length - 1] < target) return length;
    for (let i = 0; i < length; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i;
        }
    }
};

/*
Runtime: 56 ms, faster than 79.45% of JavaScript online submissions for Search Insert Position.
Memory Usage: 33.8 MB, less than 87.52% of JavaScript online submissions for Search Insert Position.
*/