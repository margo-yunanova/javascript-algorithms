/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex < endIndex) {
    const midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;

    if (target === nums[midIndex]) {
      return midIndex;
    }

    if (target < nums[midIndex]) {
      endIndex = midIndex;
    } else {
      startIndex = midIndex + 1;
    }
  }

  if (target <= nums[endIndex]) return endIndex;
  return endIndex + 1;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1], 1));
