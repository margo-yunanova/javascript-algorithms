function dblLinear(n) {
  const arr = [1];
  const set = new Set(arr);

  for (let i = 0; i < n; i++) {
    const first = arr[i] * 2 + 1;
    const second = arr[i] * 3 + 1;

    set.add(second);
    arr.push(second);

    if (set.has(first)) continue;

    set.add(first);

    for (let j = i; j < arr.length; j++) {
      if (first > arr[j] && first < arr[j + 1]) {
        arr.splice(j + 1, 0, first);
        if (j + 1 >= n) return arr[n];
        break;
      }
    }
  }

  return arr[n];
}

console.log(dblLinear(100000));
