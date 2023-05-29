const isAnagram = (word: string, anagram: string) => {
  if (word.length !== anagram.length) return false;

  const total = {};

  for (const letter of word) {
    total[letter] = (total[letter] ?? 0) + 1;
  }

  for (const letter of anagram) {
    if (!Object.hasOwn(total, letter) || total[letter] === 0) {
      return false;
    }
    total[letter]--;
  }

  return true;
};

const filterAnagrams = (word: string, anagrams: Array<string>) =>
  anagrams.filter((anagram) => isAnagram(word, anagram));

console.log(filterAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
