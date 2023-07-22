const alphabet = "abcdefghijklmnopqrstuvwxyz";

const findMissingLetter = (array: string[]) => {
  const startIndex = alphabet.indexOf(array[0].toLowerCase());
  const isLowerCase = alphabet[startIndex] === array[0];

  for (let i = 1, j = startIndex + 1; i < array.length; i++, j++) {
    if (array[i].toLowerCase() !== alphabet[j]) {
      return isLowerCase ? alphabet[j] : alphabet[j].toUpperCase();
    }
  }
};

console.log(findMissingLetter(["O", "Q", "R", "S"]));
