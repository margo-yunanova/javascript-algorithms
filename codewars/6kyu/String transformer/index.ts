const lowCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";

const stringTransformer = (str: string) =>
  str
    .split(" ")
    .reverse()
    .map((word) =>
      word
        .split("")
        .map((letter) =>
          lowCaseAlphabet.includes(letter)
            ? letter.toUpperCase()
            : letter.toLowerCase()
        )
        .join("")
    )
    .join(" ");

console.log(stringTransformer("Example   Input"));
console.log(stringTransformer(" A b C d E f G "));
