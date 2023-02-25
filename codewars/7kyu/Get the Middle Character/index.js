const getMiddle = (word) =>
  word.length % 2 === 0
    ? word.slice(word.length / 2 - 1, word.length / 2 + 1)
    : word.slice(Math.floor(word.length / 2), Math.ceil(word.length / 2));

console.log(getMiddle("teste"));
