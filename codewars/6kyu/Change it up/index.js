const alphabet = "abcdefghijklmnopqrstuvwxyz";

const isVowels = (letter) => "aeiou".includes(letter);
const getNextLetter = (letter) => alphabet[alphabet.indexOf(letter) + 1] ?? "a";

const changer = (string) => {
  let newString = "";
  for (const letter of string.toLowerCase()) {
    if (!alphabet.includes(letter)) {
      newString += letter;
    } else {
      const nextLetter = getNextLetter(letter);
      newString += isVowels(nextLetter)
        ? nextLetter.toUpperCase()
        : nextLetter;
    }
  }
  return newString;
};

console.log(changer("Cat30"));
