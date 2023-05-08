const sumOfSquareDigits = (number: number): number =>
  number
    .toString()
    .split("")
    .reduce((sum, num) => sum + (+num) ** 2, 0);

const isHappyNumber = (number: number): boolean => {
  let squareNumber = number;
  let count = 1;
  while (squareNumber !== 1 && count < 10) {
    squareNumber = sumOfSquareDigits(squareNumber);
    count++;
  }
  return squareNumber === 1;
};

console.log(isHappyNumber(13));
