const wordsCount = (
  words: Array<string>,
  stopWords: Array<string>
): Map<string, string> => {
  const stopWordsSet = new Set(stopWords);
  const wordsWithoutStopWords = words.reduce<Array<string>>(
    (array, word) =>
      !stopWordsSet.has(word.toLowerCase())
        ? [...array, word.toLowerCase()]
        : array,
    []
  );

  const collCountedWords = new Map();

  for (const word of wordsWithoutStopWords) {
    const counter = (collCountedWords.get(word) ?? 0) + 1;
    collCountedWords.set(word, counter);
  }

  return collCountedWords;
};

const stopWords = ["and", "or", "a", "the", ""];
const words = [
  "HellO",
  "h",
  "And",
  "heLlo",
  "",
  "AND",
  "DOG",
  "oR",
  "cat",
  "HELLO",
  "caT",
];
console.log(wordsCount(words, stopWords));
