const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function gap(g, m, n) {
  let first = undefined;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (first && i - first === g) {
        return [first, i];
      }
      first = i;
    }
    
  }
  
  return null;
}
