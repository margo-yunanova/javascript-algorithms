const f = (n: number, m: number) => {
  if (n < m) {
    return ((1 + n) * n) / 2;
  }

  let sum = (m * (m - 1)) / 2;

  for (let i = m; i <= n; i++) {
    sum += i % m;
  }

  return sum;
};

console.log(f(45_414_949, 80_467_116));
console.log(f(10, 5));
