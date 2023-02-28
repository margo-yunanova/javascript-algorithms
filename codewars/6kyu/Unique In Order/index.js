const uniqueInOrder = (sequence) => {
  const array = [];
  for (const char of sequence) {
    if (char !== array.at(-1)) {
      array.push(char)
    }
  }
  return array;
}

console.log(uniqueInOrder([1,2,2,3,3]));
