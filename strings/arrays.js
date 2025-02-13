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