const duplicateEncode = (word) => {
  let newWord = "";
  const counterLetters = {};
  for (const char of word) {
    counterLetters[char] = (counterLetters[char] ?? 0) + 1;
  }

  for (const char of word) {
    newWord += counterLetters[char] === 1 ? "(" : ")";
  }
  return newWord;
};

console.log(duplicateEncode("recede"));
