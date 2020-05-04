/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    candidates = candidates.sort((a, b) => a - b);
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i] > target) break;
        else if (candidates[i] == target) result.push([candidates[i]]);
        sumUp(candidates, i, target, result, candidates[i], [candidates[i]]);
    }
    return result;
};

function sumUp(candidates, index, target, result, sum, arr) {
    for (let j = index; j < candidates.length; j++) {
        let temp = sum + candidates[j];
        if (temp == target) {
            arr.push(candidates[j]);
            result.push(arr);
        }
        else if (temp > target) {
            break;
        }
        else if (temp < target) {
            let clone = [...arr];
            clone.push(candidates[j]);
            sumUp(candidates, j, target, result, temp, clone);
        }
    }
}

/*
Runtime: 68 ms, faster than 94.09% of JavaScript online submissions for Combination Sum.
Memory Usage: 37.3 MB, less than 40.62% of JavaScript online submissions for Combination Sum.
*/