/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let length = nums.length;
    if (!length || nums[0] > target) {
        return [-1, -1];
    }
    let start, count = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] > target) break;
        if (nums[i] == target) {
            if (start == undefined) start = i;
            count++;
        }
    }
    if (start != undefined) {
        return [start, start + count - 1]
    }
    else return [-1, -1];
};

/*
Runtime: 52 ms, faster than 94.01% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
Memory Usage: 35.4 MB, less than 18.82% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
*/