/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    if (!n) return result;
    if (n == 1) return ["()"];
    loop(0, n, "", result);
    return result;
}

function loop(left, n, str, result) {
    str += "(";
    left++;
    if (left == n) {
        do {
            str += ")";
        } while (str.length < n * 2);
        result.push(str);
        return;
    }
    let loopTimes = left * 2 - str.length;
    for (let j = 0; j <= loopTimes; j++) {
        let temp = str;
        let right = "";
        if (j) {
            for (let k = 0; k < j; k++) {
                right += ")";
            }
            temp += right;
        }
        loop(left, n, temp, result);
    }
}

/*
Runtime: 48 ms, faster than 99.17% of JavaScript online submissions for Generate Parentheses.
Memory Usage: 34.3 MB, less than 98.29% of JavaScript online submissions for Generate Parentheses.
*/