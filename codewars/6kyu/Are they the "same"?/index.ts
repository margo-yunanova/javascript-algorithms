const comp = (arr1: Array<number> | null, arr2: Array<number> | null) => {
  if (arr1 === null || arr2 === null) return false;
  const arrSquare = arr1.map((number) => number ** 2).sort();
  return [...arr2].sort().every((num, index) => num === arrSquare[index]);
};

const a = [2, 2, 3];
const b = [4, 9, 9];

console.log(comp(a, b));

//599
