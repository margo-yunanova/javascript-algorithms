const duplicateZeros = (array: number[]) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === 0) {
      array.splice(i, 0, 0);
      array.pop();
      i++;
    }
  }
  console.log(array);
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
