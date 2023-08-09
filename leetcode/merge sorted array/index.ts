const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void => {
  outer: for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < m; j++) {
      if (nums2[i] <= nums1[j]) {
        nums1.splice(j, 0, nums2[i]);
        nums1.pop();
        m++;
        continue outer;
      }
    }
    if (nums1[i] === 0) {
      nums1.splice(m, nums1.length - m, ...nums2.slice(i));
    }
  }

  console.log(nums1);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
