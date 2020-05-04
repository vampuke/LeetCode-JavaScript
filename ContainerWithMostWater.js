/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = 1; j < height.length; j++) {
            if (j > i) {
                let small = height[j] > height[i] ? height[i] : height[j];
                let temp = small * (j - i);
                result = result < temp ? temp : result;
            }
        }
    }
    return result;
};