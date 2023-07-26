function findNb(m: number): number {
  const D = 1 - 4 * -(Math.sqrt(m) * 2);
  const num = (-1 + Math.sqrt(D)) / 2;
  return Number.isInteger(num) ? num : -1;
}

console.log(findNb(24723578342962));
