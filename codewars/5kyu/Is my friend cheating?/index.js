function removeNb(n) {
  const sum = (n / 2) * (1 + n);
  const result = [];

  let first = 1;
  let last = n;

  while (first <= n) {
    const num = sum - first - last;
    if (num > first * last) {
      first++;
    } else if (num < first * last) {
      last--;
    } else {
      result.push([first, last]);
      first++;
    }
  }

  return result;
}
