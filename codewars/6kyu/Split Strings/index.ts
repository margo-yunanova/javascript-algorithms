// const splitString = (string: string) => {
//   const array: string[] = [];
//   for (let i = 0; i < string.length; i += 2) {
//     array.push(string[i] + (string[i + 1] ?? "_"));
//   }
//   return array;
// };

const splitString = (string: string) =>
  string
    .split("")
    .reduce<string[]>(
      (newArray, letter, i, array) =>
        i % 2 === 0 ? [...newArray, letter + (array[i + 1] ?? "_")] : newArray,
      []
    );

console.log(splitString("abc"));
