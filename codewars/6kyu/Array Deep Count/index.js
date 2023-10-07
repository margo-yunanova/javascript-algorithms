function deepCount(arr) {
  let count = arr.length;

  for (const item of arr) {
    if (Array.isArray(item)) {
      count += deepCount(item);
    }
  }
  return count;
}
