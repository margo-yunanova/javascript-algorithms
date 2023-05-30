const getSum = (arr: number[]) => arr.reduce((sum, item) => sum + item);

const minMaxSum = (arr: number[]) => {
  const sortArray = [...arr].sort();
  console.log(getSum(sortArray.slice(0, -1)));
  console.log(getSum(sortArray.slice(1)));
};

console.log(minMaxSum([1, 2, 3, 4, 5]));
