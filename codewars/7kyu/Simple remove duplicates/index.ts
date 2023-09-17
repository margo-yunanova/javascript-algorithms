const solve = (arr: number[]) =>
  arr.filter((item, i) => !arr.includes(item, i + 1));
