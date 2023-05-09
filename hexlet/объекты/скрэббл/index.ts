const countLettersInWord = (word: string): Record<string, number> => {
  const countedLetters = {};
  for (const letter of word.toLowerCase()) {
    countedLetters[letter] = (countedLetters[letter] ?? 0) + 1;
  }
  return countedLetters;
};

const scrabble = (letters: string, word: string): boolean => {
  const countedLetters = countLettersInWord(letters);
  const countedWord = countLettersInWord(word);

  for (const letter in countedWord) {
    if (countedWord[letter] > (countedLetters[letter] ?? 0)) return false;
  }
  return true;
};

console.log(scrabble("rkqodlw", "world"));
console.log(scrabble("katas", "steak"));
console.log(scrabble("scriptingjava", "JavaScript"));
