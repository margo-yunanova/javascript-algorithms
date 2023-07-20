const digPow = (n: number, p: number) => {
  const number = n.toString();
  let sum = 0;
  for (let i = 0, j = p; i < number.length; i++, j++) {
    sum += (+number[i]) ** j;
  }

  const factor = sum / n;
  return Number.isInteger(factor) ? factor : -1;
};

console.log(digPow(46288, 3));

//689
