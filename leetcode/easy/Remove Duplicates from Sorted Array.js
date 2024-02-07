/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let place = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[place] = nums[i];
      place++;
    }
  }

  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
