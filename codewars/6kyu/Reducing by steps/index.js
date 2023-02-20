const gcdi = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  const min = Math.min(a, b);
  const max = Math.max(a, b);

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

const operArray = (fct, arr, init) => arr.map(item => init = fct(item, init));

console.log(operArray(gcdi, [18, 69, -90, -78, 65, 40], 18));
