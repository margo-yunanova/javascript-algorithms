function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  const trib = [a, b, c];
  const length = n - trib.length;

  for (let i = 0; i < length; i++) {
    trib.push(trib[i] + trib[i + 1] + trib[i + 2]);
  }

  return trib.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([300, 200, 100], 0));
