const findOdd = (array) => {
  if (array.length === 1) return array[0];

  const checkedNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (!checkedNumbers.includes(array[i])) {
      checkedNumbers.push(array[i]);
      let count = 1;

      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          count++
        };
      }

      if (count % 2 !== 0) return array[i];
    }
  }
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
