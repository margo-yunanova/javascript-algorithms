const isEven = (num: number) => num % 2 === 0;

const numberOfSteps = (num: number): number => {
  let counter = 0;

  while (num > 0) {
    if (isEven(num)) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    counter++;
  }
  return counter;
};

console.log(numberOfSteps(123));
