/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var result = [];
    if (nums.length < 4) return result;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        if (i && nums[i] == nums[i - 1]) {
            continue;
        }
        let temp = threeSum(nums.slice(i + 1), target - nums[i]);
        for (let arr of temp) {
            arr.unshift(nums[i]);
            result.push(arr);
        }
    }
    return result;
}

function threeSum(nums, target) {
	var result = [];
	for (var i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (var j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === target) {
                result.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > target) {
				k--;
			} else {
				j++;
			}
        }
    }
    return result;
}

/*
Runtime: 96 ms, faster than 83.00% of JavaScript online submissions for 4Sum.
Memory Usage: 38.1 MB, less than 28.41% of JavaScript online submissions for 4Sum.
*/