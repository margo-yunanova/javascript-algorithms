const numbers = "0123456789";

const stringExpansion = (string) => {
  let number = 1;
  return string.split("").reduce((newStr, char) => {
    if (numbers.includes(char)) {
      number = char;
      return newStr;
    }
    return newStr + char.repeat(number);
  }, "");
};

console.log(stringExpansion("3d332f2a"));
