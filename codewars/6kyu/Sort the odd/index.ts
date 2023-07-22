const sortArray = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) continue;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] % 2 === 0) continue;

      if (array[i] > array[j]) {
        let temp = 0;
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));
