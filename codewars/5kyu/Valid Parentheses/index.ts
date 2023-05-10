export const isValid = (str: string): boolean => {
  let counter = 0;
  if (str.startsWith(")")) return false;
  for (const char of str) {
    if (char === "(") {
      counter++;
    } else if (counter > 0 && char === ")") {
      counter--;
    } else {
      return false;
    }
  }

  return counter === 0;
};
