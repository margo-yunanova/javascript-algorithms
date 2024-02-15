var solution = function(firstArray, secondArray) {
  return firstArray.reduce((acc, num, i) => acc + (num - secondArray[i]) ** 2, 0) / firstArray.length;
}
