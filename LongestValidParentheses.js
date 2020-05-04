/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var arr = s.split('');
    var temp = [],
        result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "(") {
            temp.push(i);
        }
        else {
            if (temp.length === 0 || arr[temp[temp.length - 1]] == ")") {
                temp.push(i);
            }
            else {
                temp.pop();
            }
        }
    }
    temp.push(arr.length);
    temp.unshift(-1);
    for (let i = 0; i < temp.length - 1; i++) {
        let length = temp[i + 1] - temp[i] - 1;
        result = result > length ? result : length;
    }
    return result;
}

/*
Runtime: 60 ms, faster than 95.71% of JavaScript online submissions for Longest Valid Parentheses.
Memory Usage: 36.8 MB, less than 43.79% of JavaScript online submissions for Longest Valid Parentheses.
*/