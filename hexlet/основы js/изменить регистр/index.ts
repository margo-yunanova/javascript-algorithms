const invertCase = (string: string): string => {
  let newString = "";
  for (const letter of string) {
    if (letter === letter.toUpperCase()) {
      newString += letter.toLowerCase();
    } else {
      newString += letter.toUpperCase();
    }
  }
  return newString;
};

console.log(invertCase("Hello, World!"));
