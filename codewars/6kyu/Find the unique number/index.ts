const findUniq1 = (arr: number[]): number => {
  const newArr = [...arr];
  newArr.sort();
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
};

const findUniq2 = (arr: number[]): number =>
  arr.includes(arr[0], 1) ? arr.find((num) => arr[0] !== num)! : arr[0];

const findUniq = (arr: number[]): number => {
  const total = {};
  for (const num of arr) {
    total[num] = (total[num] ?? 0) + 1;
  }

  //return +Object.entries(total).find((array) => array[1] === 1)![0];
  for (const key in total) {
    if (total[key] === 1) return +key;
  }
  return 0;
};

console.log(findUniq([2, 1, 1, 1, 1, 1]));
console.log(findUniq([1, 2, 1, 1, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 1, 1, 2, 1]));
console.log(findUniq([1, 1, 1, 1, 1, 2]));
