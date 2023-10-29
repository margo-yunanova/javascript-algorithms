function perimeter(n) {
  let prev1 = 0;
  let prev2 = 1;
  let perimetr = 4;
  
  for (i = 1; i <= n; i++) {
    const fib = prev1 + prev2;
    perimetr += fib * 4
    prev1 = prev2;
    prev2 = fib;
  }
  
  return perimetr;
}
