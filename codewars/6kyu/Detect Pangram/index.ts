const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");

const isPanagram = (string: string) => {
  const set = new Set();
  for (const char of string) {
    if (alphabet.has(char.toLowerCase())) {
      set.add(char.toLowerCase());
    }
  }

  return set.size === alphabet.size;
};

console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram("This is not a pangram."));
