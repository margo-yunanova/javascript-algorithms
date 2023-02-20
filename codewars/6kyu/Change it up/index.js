const alphabet = "abcdefghijklmnopqrstuvwxyz";

const isVowels = (letter) => "aeiou".includes(letter);
const getNextLetter = (letter) => alphabet[alphabet.indexOf(letter) + 1] ?? "a";

const changer = (string) =>
  string
    .toLowerCase()
    .split("")
    .map((letter) =>
      !alphabet.includes(letter)
        ? letter
        : isVowels(getNextLetter(letter))
        ? getNextLetter(letter).toUpperCase()
        : getNextLetter(letter)
    )
    .join("");

console.log(changer("Cat30"));
