/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let temp = x;
    let pa = 0;
    do {
        pa = pa * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    while (x) {}
    if (pa == temp) return true;
    else return false;
};


/*
Runtime: 164 ms, faster than 99.89% of JavaScript online submissions for Palindrome Number.
Memory Usage: 45.2 MB, less than 78.28% of JavaScript online submissions for Palindrome Number.
*/