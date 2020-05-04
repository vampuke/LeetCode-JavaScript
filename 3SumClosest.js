/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let min;
    let result;
    if (nums.length == 3) {
        return nums[0] + nums[1] + nums[2];
    }
    for (let i = 0; i < nums.length - 2; i++) {
        let sum = 0;
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                let gap = Math.abs(sum - target);
                if (gap == 0) return sum;
                if (min != null) {
                    if (gap < min) {
                        min = gap;
                        result = sum;
                    }
                }
                else {
                    min = gap;
                    result = sum;
                }
            }
        }
    }
    return result;
};


/*
Runtime: 72 ms, faster than 74.15% of JavaScript online submissions for 3Sum Closest.
Memory Usage: 34.8 MB, less than 93.73% of JavaScript online submissions for 3Sum Closest.
*/