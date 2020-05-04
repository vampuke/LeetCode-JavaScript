/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!words.length) return [];
    let length = words.length * words[0].length;
    let l = words[0].length;
    let map = new Map();
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let sub = s.substring(i, i + l);
        if (words.indexOf(sub) !== -1 && helper(s, words, l, i, length)) {
            result.push(i);
        }
    }
    return result;
}


function helper(s, words, l, i, length) {
    if (i + length > s.length) {
        return false;
    } 
    let map = new Map();
    for (word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }
    let sub = s.substring(i, i + length);
    for (let j = 0; j < length; j += l) {
        let temp = sub.substring(j, j + l);
        if (map.has(temp) && map.get(temp) >= 1) {
            map.set(temp, map.get(temp) - 1);
        } else {
            return false;
        }
    }
    return true;
}

/*
Runtime: 312 ms, faster than 57.87% of JavaScript online submissions for Substring with Concatenation of All Words.
Memory Usage: 42.3 MB, less than 64.49% of JavaScript online submissions for Substring with Concatenation of All Words.
*/