function diagonalDifference(arr: number[][]): number {
  // Write your code here

  let counter = 0;
  const first = arr.reduce((sum, array) => {
    sum = sum + array[counter];
    counter++;
    return sum;
  }, 0);

  counter = arr.length - 1;
  const second = arr.reduce((sum, array) => {
    sum = sum + array[counter];
    counter--;
    return sum;
  }, 0);

  return Math.abs(first - second);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
