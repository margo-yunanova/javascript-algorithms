const sortedSquares = (nums: number[]) =>
  nums.map((num) => num ** 2).sort((a, b) => a - b);

console.log(sortedSquares([-7, -3, 2, 3, 11]));
