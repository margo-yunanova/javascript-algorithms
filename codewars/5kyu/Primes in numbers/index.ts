const primeFactors = (n: number): string => {
  let number = n;
  const totalPrimeNumbers: { [key: string]: number } = {};
  let i = 2;

  while (number !== 1) {
    if (number % i === 0) {
      number = number / i;
      totalPrimeNumbers[i] = (totalPrimeNumbers[i] ?? 0) + 1;
    } else {
      i++;
    }
  }

  return Object.entries(totalPrimeNumbers).reduce(
    (str, arr) => str + `(${arr[0]}` + (arr[1] === 1 ? ")" : `**${arr[1]})`),
    ""
  );
};

console.log(primeFactors(7775460));
// (2**2)(3**3)(5)(7)(11**2)(17)
