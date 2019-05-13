/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hasBreak = false;
    let length = 0;
    for (let i = 0; i < s.length; i++) {
        let temp = new Set([s[i]]);
        for (let j = i + 1; j < s.length; j++) {
            temp.add(s[j]);
            if (temp.size != j - i + 1 || j == s.length - 1) {
                length = length > temp.size ? length : temp.size;
                hasBreak = true;
                break;
            }
        }
    }
    if (!hasBreak) length = s.length;
    return length;
};
