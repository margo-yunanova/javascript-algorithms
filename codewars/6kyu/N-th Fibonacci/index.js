function nthFibo(n) {
  let prevOne = 0;
  let prevTwo = 1;
  if (n === 1) return prevOne;
  if (n === 2) return prevTwo;
  
  let fib= 0;
  for (let i = 3; i <= n; i++) {
    fib = prevOne + prevTwo;
    prevOne = prevTwo;
    prevTwo = fib;
  }
  return fib;
}
