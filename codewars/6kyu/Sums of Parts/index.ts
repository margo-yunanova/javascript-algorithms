function partsSums(ls: number[]): number[] {
  const arr: number[] = [];
  let memo = 0;
  for (let i = ls.length - 1; i >= 0; i--) {
    memo += ls[i];
    arr.push(memo);
  }
  arr.reverse().push(0);
  return arr;
}

console.log(partsSums([0, 1, 3, 6, 10]));
