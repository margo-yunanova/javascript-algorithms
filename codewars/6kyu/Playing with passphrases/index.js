const rotateLetterByNumber = (n) => (char) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const index = alphabet.indexOf(char.toLowerCase());
  return index === -1 ? char : alphabet[(index + n) % 26];
};

const getDigitByComplementToNumber = (number) => (char) =>
  Number.isInteger(Number.parseInt(char)) ? `${number - char}` : char;

const setCaseLetter = (char, i) =>
  i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();

function playPass(s, n) {
  return s
    .split("")
    .map(rotateLetterByNumber(n))
    .map(getDigitByComplementToNumber(9))
    .map(setCaseLetter)
    .reverse()
    .join("");
}
