const pickPeaks = (array: number[]) => {
  const result: {
    pos: number[];
    peaks: number[];
  } = {
    pos: [],
    peaks: [],
  };
  const length = array.length;
  for (let i = 1; i < length - 1; i++) {
    const curr = array[i];
    const prev = array[i - 1];
    const next = array[i + 1];
    if (curr > prev && curr > next) {
      result.pos.push(i);
      result.peaks.push(curr);
    } else if (curr > prev && curr === next) {
      const nextNotEqual = array.find((num, j) => j >= i + 1 && curr !== num);

      if (nextNotEqual === undefined) return result;
      if (nextNotEqual < curr) {
        result.pos.push(i);
        result.peaks.push(curr);
      }
    }
  }

  return result;
};
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
console.log(pickPeaks([0, 1, 2, 5, 1, 0]));
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
console.log(pickPeaks([1, 2, 2, 2, 1]));
console.log(pickPeaks([1, 2, 2, 2, 3]));
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]));
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]));
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]));
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]));
console.log(
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ])
);
