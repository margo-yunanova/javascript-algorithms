const getCount = (number: number) => {
  const numAsStr = number.toString();
  let counter = 0;
  for (let i = 0; i < numAsStr.length; i++) {
    for (let j = i + 1; j <= numAsStr.length; j++) {
      const divider = +numAsStr.slice(i, j);
      if (number % divider === 0) {
        counter++;
      }
    }
  }
  return counter - 1;
};

console.log(getCount(123));
