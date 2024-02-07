/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort((a, b) => a - b);
  const first = nums.indexOf(val);
  const last = nums.lastIndexOf(val);

  if (first !== -1) nums.splice(first, last - first + 1);

  return nums.length;
};

var removeElement2 = function (nums, val) {
  let place = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[place] = nums[i];
      place++;
    }
  }

  return place;
};
