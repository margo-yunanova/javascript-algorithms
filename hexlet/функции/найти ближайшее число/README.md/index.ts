const findIndexOfNearest = (numbers: Array<number>, number: number) => {
  if (numbers.length === 0) return null;

  let minIndex = 0;
  let minDiff = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    const diff = Math.abs(numbers[i] - number);
    if (diff === 0) return i;
    else if (minDiff > diff) {
      minDiff = diff;
      minIndex = i;
    }
  }

  return minIndex;
};

console.log(findIndexOfNearest([], 2));
console.log(findIndexOfNearest([15, 10, 3, 4], 0));
console.log(findIndexOfNearest([7, 5, 3, 2], 4));
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4));
