/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max = 2**31 - 1;
    let isMinus = false;
    let stringNum = Math.abs(x).toString().split('').reverse().join('');
    if (stringNum > max) return 0;
    let result = Number(stringNum);
    isMinus = x < 0 ? true : false;
    if (isMinus) result = 0 - result;
    return result;
};



/*
Runtime: 72 ms, faster than 98.74% of JavaScript online submissions for Reverse Integer.
Memory Usage: 35.8 MB, less than 69.25% of JavaScript online submissions for Reverse Integer.
*/
