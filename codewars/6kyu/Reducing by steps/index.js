const gcdi = (a, b) => {
  const min = Math.abs(Math.min(a, b));
  const max = Math.abs(Math.max(a, b));

  if (max % min === 0) {
    return min;
  } else {
    let firstRemainder = max % min;
    let secondRemainder = min % firstRemainder;
    let thirdRemainder;
    while (secondRemainder !== 0) {
      thirdRemainder = firstRemainder % secondRemainder;
      firstRemainder = secondRemainder;
      secondRemainder = thirdRemainder;
    }
    return firstRemainder;
  }
};

const lcmu = (x, y) => Math.abs(x * y) / gcdi(x, y);

const sum = (a, b) => a + b;

const max = Math.max;

const min = Math.min;

const operArray = (fct, arr, init) => {
  let newArr = [];
  arr.reduce((sum, i) => {
    sum = fct(sum, i);
    newArr.push(sum);

    return sum;
  }, init);

  return newArr;
};

console.log(operArray(lcmu, [18, 69, -90, -78, 65, 40], 18));
