// #region 283. Move Zeroes
var moveZeroes = function(nums) {
    if (nums.length < 2) {
        return nums;
    }

    let slow = 0;
    for (let fast=1;fast<nums.length;fast++) {
        if (nums[fast] !== 0 && nums[slow] == 0) {
            nums[slow] = nums[fast];
            nums[fast] = 0;
            slow +=1;
        }

        if (nums[slow] !== 0) {
            slow+=1;
        }
    }

    return nums;
};
// #endregion