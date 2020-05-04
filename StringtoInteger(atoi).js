/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim().split(" ");
    str = str[0];
    let max = 2**31 - 1;
    let min = 0 - 2**31;
    let result = "";
    if (!str.length) return 0;
    if (str.length == 1 && isNaN(Number(str[0]))) return 0;
    else if (str[0] != "-" && str[0] != "+" && isNaN(Number(str[0])) && str.length > 1) return 0;
    else if (str.length > 1 && isNaN(Number(str[0])) && isNaN(Number(str[1]))) return 0;
    else {
        let index = 0;
        do {
            result += str[index];
            index++;
        }
        while (!isNaN(Number(str[index]))) {
        }
        result = Number(result);
        if (result > max) result = max;
        if (result < min) result = min;
        return result;
    }
};


/*
Runtime: 84 ms, faster than 93.42% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 36.7 MB, less than 29.05% of JavaScript online submissions for String to Integer (atoi).
*/