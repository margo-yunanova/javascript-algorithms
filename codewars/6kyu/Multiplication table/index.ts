export function multiplicationTable(size: number): number[][] {
  const arr: number[][] = [];

  for (let row = 1; row <= size; row++) {
    const rowA: number[] = [];
    for (let column = 1; column <= size; column++) {
      rowA.push(column * row);
    }
    arr.push(rowA);
  }

  return arr;
}

console.log(multiplicationTable(3));
