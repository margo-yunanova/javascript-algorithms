const alphabet = "abcdefghijklmnopqrstuvwxyz";

const high = (str: string): string => {
  let max = 0;
  let maxWord = "";
  const array = str.split(" ");

  for (const word of array) {
    let sum = 0;
    for (const letter of word) {
      sum += alphabet.indexOf(letter) + 1;
    }

    if (sum > max) {
      max = sum;
      maxWord = word;
    }
  }

  return maxWord;
};

console.log(high("man i need a taxi up to ubud"));
