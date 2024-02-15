function pyramid(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Array(i).fill(1));
  }
  
  return arr;
}
