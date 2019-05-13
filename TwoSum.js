/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let numsMap = new Map();
  for (i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i];
    }
    numsMap.set(nums[i], i);
  }
  throw new Error("No two sum solution found.");
};
