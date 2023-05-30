const findNumbers = (nums: number[]) =>
  nums.reduce(
    (counter, num) => (num.toString().length % 2 === 0 ? ++counter : counter),
    0
  );

console.log(findNumbers([12, 345, 2, 6, 7896]));
