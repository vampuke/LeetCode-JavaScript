/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) {
        return -1;
    }
    else if (nums.length == 1 && nums[0] !== target) return -1;
    let length = nums.length;
    if (target === nums[0]) {
        return 0;
    }
    else if (target > nums[0]) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === target) return i;
            else if (i == length - 1) return -1;
            else if (nums[i] < nums[i - 1]) return -1;
        }
    } else if (target < nums[0]) {
        for (let j = length - 1; j > 0; j--) {
            if (nums[j] === target) return j;
            else if (j === 1) return -1;
            else if (nums[j] < nums[j - 1]) return -1;
        }
    }
};


/*
Runtime: 52 ms, faster than 93.23% of JavaScript online submissions for Search in Rotated Sorted Array.
Memory Usage: 33.7 MB, less than 94.21% of JavaScript online submissions for Search in Rotated Sorted Array.
*/