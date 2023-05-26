// const reverse = (string: string) => {
//   let newString = "";

//   for (let i = string.length - 1; i >= 0; i--) {

//     newString = newString + string[i]
//   }

//   return newString;
// };

const reverse = (string: string) => {
  if (string.length === 0) return string;
  return string.at(-1) + reverse(string.slice(0, -1));
};

console.log(reverse("привет"));
