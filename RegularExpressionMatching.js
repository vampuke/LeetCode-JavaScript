/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p) return !s;
    let first_char = (s && (s[0] == p[0] || p[0] == "."));
    if (p.length >= 2 && p[1] == "*") {
        return (isMatch(s, p.substring(2)) || first_char && isMatch(s.substring(1), p))
    }
    else {
        return first_char && isMatch(s.substring(1), p.substring(1));
    }
};

/*
Runtime: 124 ms, faster than 37.00% of JavaScript online submissions for Regular Expression Matching.
Memory Usage: 37.2 MB, less than 46.57% of JavaScript online submissions for Regular Expression Matching.
*/