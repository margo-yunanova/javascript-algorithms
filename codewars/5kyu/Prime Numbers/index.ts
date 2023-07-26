const isPrime = (num: number) => {
  if (num <= 1) return false;

  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const getPrimes = (start: number, finish: number) => {
  const min = Math.min(start, finish);
  const max = Math.max(start, finish);
  const array: number[] = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      array.push(i);
    } else continue;
  }
  return array;
};

console.log(getPrimes(0, 30));
