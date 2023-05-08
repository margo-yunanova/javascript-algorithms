const isPerfect = (number: number): boolean => {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
};

console.log(isPerfect(6));
