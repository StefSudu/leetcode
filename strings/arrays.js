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