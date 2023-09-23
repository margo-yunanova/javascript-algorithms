const anagramDifference = (word1: string, word2: string) => {
  const totalWord1 = {};
  const totalWord2 = {};

  for (const char of word1) {
    totalWord1[char] = (totalWord1[char] ?? 0) + 1;
  }

  for (const char of word2) {
    totalWord2[char] = (totalWord2[char] ?? 0) + 1;
  }

  let similarChar = 0;

  for (const char in totalWord1) {
    similarChar += Math.min(totalWord1[char], totalWord2[char] ?? 0);
  }

  return word1.length + word2.length - 2 * similarChar;
};

console.log(anagramDifference("aab", "a"));
