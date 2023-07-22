const deleteNth = (arr: number[], num: number) => {
  const total = {};
  const newArray: number[] = arr.filter((number) => {
    total[number] = (total[number] ?? 0) + 1;
    return total[number] <= num;
  });

  return newArray;
};

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
