const solution = (string: string) => {
  let newString = "";
  for (const letter of string) {
    if (letter === letter.toUpperCase()) {
      newString += " " + letter;
    } else {
      newString += letter;
    }
  }
  return newString;
};

const solution2 = (string: string) =>
  [...string].reduce(
    (newString, letter) =>
      letter === letter.toUpperCase()
        ? newString + " " + letter
        : newString + letter,
    ""
  );
