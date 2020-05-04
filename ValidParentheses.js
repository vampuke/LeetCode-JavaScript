/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s.length) return true;
    if (s.length % 2 != 0 || s[0] == ')' || s[0] == ']' || s[0] == '}') return false;
    let temp = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            temp.push(s[i]);
        } else {
            let flag;
            switch (s[i]) {
                case ")":
                    flag = temp[temp.length - 1] == "(" ? true : false;
                    break;
                case "}":
                    flag = temp[temp.length - 1] == "{" ? true : false;
                    break;
                case "]":
                    flag = temp[temp.length - 1] == "[" ? true : false;
                    break;
                default:
                    break;
            }
            if (flag) {
                temp.pop();
            }
            else return false;
        }
    }
    if (!temp.length) return true;
    else return false;
};


/*
Runtime: 56 ms, faster than 93.28% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 34.8 MB, less than 34.00% of JavaScript online submissions for Valid Parentheses.
*/