// #region 1768. Merge Strings Alternatively
var mergeAlternately = function(word1, word2) {
    let ptr1 = 0;
    let arr = [];

    while (ptr1 < word1.length && ptr1 < word2.length) {
        arr.push(word1[ptr1]);
        arr.push(word2[ptr1]);
        ptr1+=1;
    }

    while (ptr1 < word1.length) {
        arr.push(word1[ptr1]);
        ptr1+=1;
    }


    while (ptr1 < word2.length) {
        arr.push(word2[ptr1]);
        ptr1+=1;
    }

    return arr.join('');
};
// #endregion