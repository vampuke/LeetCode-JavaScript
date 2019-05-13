/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result;
    if (!s.length || s.length == 1) return s;
    for (let gap = 0; gap <= s.length - 1; gap++) {
        for (let i = 0; i <= gap; i++) {
            let temp = s.slice(i, s.length - gap + i);
            let len = temp.length;
            result = temp;
            for (let j = 0; j < temp.length; j++) {
                if (temp[j] != temp[len - j - 1]) {
                    result = null;
                    break;
                }
            }
            if (result) break;
        }
        if (result) break;
    }
    return result;
};
