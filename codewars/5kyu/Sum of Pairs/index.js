const sumPairs = (ints, sum) => {
  const checked = [];
  let secondIndex = ints.length;
  let results = undefined;

  for (let i = 0; i < secondIndex - 1; i++) {
    if (checked.includes(ints[i])) continue;

    checked.push(ints[i]);

    for (let j = i + 1; j < secondIndex; j++) {
      if (ints[i] + ints[j] === sum) {
        secondIndex = j;
        results = [ints[i], ints[j]];
      }
    }
  }
  return results;
};

console.log(sumPairs([10, 5, 2, 4, 3, 7, 8, 6],10));
