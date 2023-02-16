const getNewArray = (array) => {
  const newArray = array.length % 2 === 0 ? array : [0, ...array];
  const arr1 = newArray.slice(0, newArray.length / 2);
  const arr2 = newArray.slice(newArray.length / 2);
  return arr1.map((number, i) => number + arr2[i]);
};

const splitAndAdd = (array, number) => {
  let newArr = [...array];
  for (let i = 1; newArr.length !== 1 && i <= number; i++) {
    newArr = getNewArray(newArr);
  }
  return newArr;
};

console.log(splitAndAdd([4, 2, 5, 3, 2, 5, 7], 2));
