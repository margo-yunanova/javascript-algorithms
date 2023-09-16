function findEvenIndex1(arr: number[]): number {
  for (let i = -1; i < arr.length; i++) {
    const sumLeft = arr.slice(0, i + 1).reduce((sum, num) => sum + num, 0);
    const sumRight = arr.slice(i + 2).reduce((sum, num) => sum + num, 0);
    if (sumLeft === sumRight) return i + 1;
  }
  return -1;
}

function findEvenIndex(arr: number[]): number {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  let sumLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    const sumRight = totalSum - sumLeft - arr[i];
    if (sumLeft === sumRight) return i;
    sumLeft += arr[i];
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
