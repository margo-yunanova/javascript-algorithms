const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

const alphanumeric = (string) => {
  if (string.length === 0) return false;
  for (const char of string.toLowerCase()) {
    if (!alphabet.includes(char) && !numbers.includes(char)) {
      return false;
    }
  }
  return true;
};

// console.log(alphanumeric("Mazinkaiser"));
// console.log(alphanumeric("hello world_"));
// console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric(""));

console.log();
