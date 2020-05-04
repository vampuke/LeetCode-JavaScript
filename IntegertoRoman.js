/**
 * @param {number} num
 * @return {string}
 */
function addChar(one, five, ten, digit, result) {
    switch (digit) {
        case "1":
            result += one;
            break;
        case "5":
            result += five;
            break;
        case "0":
            result += ten;
            break;
        default:
            break;
    }
    return result;
}

var intToRoman = function(num) {
    let result = "";

    let romanArr = ['1', '11', '111', '15', '5', '51', '511', '5111', '10', '0'];
    if (num >= 1000) {
        for (let i = 0; i < Math.floor(num / 1000); i++) {
            result += "M";
        }
        num = num % 1000;
    }
    if (num >= 100) {
        let digit = (num - num % 100) / 100 - 1;
        for (let i = 0; i < romanArr[digit].length; i++) {
            result = addChar("C", "D", "M", romanArr[digit][i], result);
        }
        num = num % 100;
    }
    if (num >= 10) {
        let digit = (num - num % 10) / 10 - 1;
        for (let i = 0; i < romanArr[digit].length; i++) {
            result = addChar("X", "L", "C", romanArr[digit][i], result);
        }
        num = num % 10;
    }
    if (num >= 1) {
        let digit = num - 1;
        for (let i = 0; i < romanArr[digit].length; i++) {
            result = addChar("I", "V", "X", romanArr[digit][i], result);
        }
    }
    return result;
};




/*
Runtime: 124 ms, faster than 99.57% of JavaScript online submissions for Integer to Roman.
Memory Usage: 39.6 MB, less than 92.72% of JavaScript online submissions for Integer to Roman.
*/