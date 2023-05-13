const getFactorial = (number: number) => {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

const getPascalsTriangleLine = (row: number): Array<number> => {
  const leftHalfTriangle: Array<number> = [];
  const halfLengthRow = Math.ceil((row + 1) / 2);

  for (let i = 0; i < halfLengthRow; i++) {
    leftHalfTriangle.push(
      getFactorial(row) / (getFactorial(i) * getFactorial(row - i))
    );
  }

  const rightHalfTriangle = leftHalfTriangle
    .slice(0, row % 2 === 0 ? -1 : undefined)
    .reverse();

  return [...leftHalfTriangle, ...rightHalfTriangle];
};

console.log(getPascalsTriangleLine(0));
console.log(getPascalsTriangleLine(1));
console.log(getPascalsTriangleLine(2));
console.log(getPascalsTriangleLine(3));
console.log(getPascalsTriangleLine(4));
console.log(getPascalsTriangleLine(5));
