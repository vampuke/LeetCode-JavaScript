/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) return "1";
    if (n == 2) return "11";
    let term;
    term = "11";
    for (let i = 2; i < n; i++) {
        term = generate(term);
    }
    return term;
}


function generate(term) {
    let length = term.length, temp, count = 1, result = "";
    temp = term[0];
    for (let i = 1; i < length; i++) {
        if (term[i] == temp) {
            count++;
        }
        else {
            result += count.toString() + temp;
            temp = term[i];
            count = 1;
        }
        if (i == length - 1) {
            result += count.toString() + temp;
        }
    }
    return result;
}

/*
Runtime: 48 ms, faster than 98.66% of JavaScript online submissions for Count and Say.
Memory Usage: 36 MB, less than 22.19% of JavaScript online submissions for Count and Say.
*/