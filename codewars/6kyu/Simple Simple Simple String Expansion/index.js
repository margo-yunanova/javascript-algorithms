const numbers = "0123456789";

const stringExpansion = (string) => {
  let number = 1;
  return string.split("").map((char) => {
    if (numbers.includes(char)) {
      number = +char;
      return "";
    }
    return char.repeat(number);
  }).join("");
};

console.log(stringExpansion("3d332f2a"));


const stringExpansion2 = (string) => {
  let number = 1;
  return string.split("").flatMap((char) => {
    if (numbers.includes(char)) {
      number = +char;
      return [];
    }
    return Array(number).fill(char);
  }).join("");
};

console.log(stringExpansion2("3d332f2a"));
