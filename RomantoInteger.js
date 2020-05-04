/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let index = 0;
    let result = 0;
    do {
        if (s[index] == "M") {
            result += 1000;
        }
        if (s[index] == "D") {
            result += 500;
        }
        if (s[index] == "C") {
            if (s[index + 1] == "M") {
                result += 900;
                index = index + 2;
                continue;
            }
            else if (s[index + 1] == "D") {
                result += 400
                index = index + 2;
                continue;
            }
            else result += 100;
        }
        if (s[index] == "L") {
            result += 50;
        }
        if (s[index] == "X") {
            if (s[index + 1] == "C") {
                result += 90;
                index = index + 2;
                continue;
            }
            else if (s[index + 1] == "L") {
                result += 40
                index = index + 2;
                continue;
            }
            else result += 10;
        }
        if (s[index] == "V") {
            result += 5;
        }
        if (s[index] == "I") {
            if (s[index + 1] == "X") {
                result += 9;
                index = index + 2;
                continue;
            }
            else if (s[index + 1] == "V") {
                result += 4
                index = index + 2;
                continue;
            }
            else {
                result += 1;
                
            }
        }
        index++;
    }
    while (s[index]);
    return result;
};




/*
Runtime: 144 ms, faster than 96.54% of JavaScript online submissions for Roman to Integer.
Memory Usage: 39.6 MB, less than 90.53% of JavaScript online submissions for Roman to Integer.
*/