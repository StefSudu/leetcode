// #region 1456. Maximum Number of Vowels in a Substring of Given Length
var maxVowels = function(s, k) {
    const hm  = {"a":1, "e":1, "i":1, "o":1, "u":1};
    let left = 0;
    let right = 0;

    let maxVowels = Number.MIN_VALUE;
    let windowSum = 0;

    for (right;right<k;right++) {
        const currChar = s[right];
        if (currChar in hm) {
            windowSum +=1;
        }
        maxVowels = Math.max(maxVowels, windowSum)
    }

    for (right; right<s.length;right++){
        if (s[left] in hm) {
            windowSum-=1;
        }
        if (s[right] in hm) {
            windowSum +=1;
        }
        left+=1;
        maxVowels = Math.max(maxVowels, windowSum)
    }

    return maxVowels == Number.MIN_VALUE ? 0 : maxVowels;
};
// #endregion