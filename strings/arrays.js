// #region 1431. Kids With the Greatest Number of Candies
var kidsWithCandies = function(candies, extraCandies) {
    let greatest = 0;
    for (let kid of candies) {
        greatest = Math.max(greatest, kid);
    }

    let arr = [];
    for (let kid of candies) {
        if (kid + extraCandies >= greatest) {
            arr.push(true);
        } else {
            arr.push(false);
        };
    };

    return arr;
};
// #endregion

// #region 605. Can Place Flower
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;

    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 && 
            (i === 0 || flowerbed[i - 1] === 0) && 
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            n--;
            if (n === 0) return true;
        }
    }

    return n === 0;
};
// #endregion

// #region 345. Reverse Vowels of a String
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let hm = new Map();

    for (let vowel of vowels) {
        hm.set(vowel, true);
    };

    let arr = s.split('');

    let start = 0;
    let end = arr.length-1;

    while (start < end) {
        let startChar = arr[start];
        let endChar = arr[end];

        if (hm.has(startChar.toLowerCase()) && hm.has(endChar.toLowerCase())) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start+=1;
            end-=1;
        } else if (!hm.has(startChar.toLowerCase())) { 
            start += 1; 
        } else {  
            end -= 1;  
        }
    }

    return arr.join('');
};
// #endregion

// #region 151. Reverse Words in a String
var reverseWords = function(s) {
    let arr = s.split(' ');

    let finalArr = [];

    for (let i=arr.length-1;i>=0;i--){
        if (arr[i] !== "") {
            finalArr.push(arr[i]);
        }
    }

    return finalArr.join(' ');
};
// #endregion