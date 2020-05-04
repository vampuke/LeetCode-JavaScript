/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    let apart = digits.split('');
    apart = apart.map(num => {
        let char;
        switch (Number(num)) {
            case 2:
                char = 'abc';
                break;
            case 3:
                char = 'def'
                break;
            case 4:
                char = 'ghi';
                break;
            case 5:
                char = 'jkl'
                break;
            case 6:
                char = 'mno';
                break;
            case 7:
                char = 'pqrs'
                break;
            case 8:
                char = 'tuv';
                break;
            case 9:
                char = 'wxyz'
                break;
        }
        return char;
    })
    let result = [];
    combineChar('', apart, result);
    return result;
};


function combineChar(combination, apart, result) {
    if (!apart.length) {
        result.push(combination);
        return;
    }
    let charSet = apart[0];
    for (let i = 0; i < charSet.length; i++) {
        letter = charSet[i];
        combineChar(combination + letter, apart.slice(1), result);
    }
}


/*
Runtime: 56 ms, faster than 91.40% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 33.7 MB, less than 95.61% of JavaScript online submissions for Letter Combinations of a Phone Number.
*/