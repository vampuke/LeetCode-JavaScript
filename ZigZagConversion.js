/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result = "";
    let gap = (numRows - 1) * 2;
    const len = s.length;
    if (len <= 2 || numRows == 1) return s;
    for (let row = 0; row < numRows; row++) {
        if (row == 0 || row == numRows -1) {
            let index = 0;
            let times = 0;
            do {
                index = row + times*gap;
                if(s[index]) result += s[index];
                times++;
            }
            while (index + gap < len) {
                
            }
        }
        else {
            let index = 0;
            let times = 0;
            let intent = (numRows - row - 1) * 2;
            do {
                if (row + index*gap < len) result += s[row + index*gap];
                if (row + index*gap + intent < len) result += s[row + index*gap + intent];
                index++;
            }
            while (row + index*gap <= len) {

            }
        }
    }
    return result;
};



/*
Runtime: 88 ms, faster than 97.02% of JavaScript online submissions for ZigZag Conversion.
Memory Usage: 38 MB, less than 96.92% of JavaScript online submissions for ZigZag Conversion.
*/
