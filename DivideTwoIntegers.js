/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result = Math.floor(dividend / divisor);
    if (result < 0 && dividend % divisor) {
        if (result < -1) {
            result++;
        }
        else result = 0;
    }
    if (result >= 2147483647) {
        return 2147483647;
    }
    return result;
};

/*
Runtime: 76 ms, faster than 89.15% of JavaScript online submissions for Divide Two Integers.
Memory Usage: 34.8 MB, less than 95.23% of JavaScript online submissions for Divide Two Integers.
*/