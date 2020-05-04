/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    let temp = "";
    let stop = false;
    let result;
    for (let i = 0; i < strs[0].length; i++) {
        if (!strs[0].length) {
            return "";
            break;
        }
        temp = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j].length) {
                stop = true;
                result = "";
                break;
            }
            if (strs[j][i] != temp) {
                stop = true;
                result = strs[0].slice(0, i);
                break;
            }
        }
        if (stop) break;
    }
    if (!stop) return strs[0];
    return result;
};


/*
Runtime: 56 ms, faster than 97.31% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 35.1 MB, less than 44.29% of JavaScript online submissions for Longest Common Prefix.
*/