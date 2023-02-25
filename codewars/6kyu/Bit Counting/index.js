// const countBits = (number) => {
//   let count = 0;
//   for (let i = number; i !== 0; i = Math.floor(i / 2)) {
//     count += i % 2;
//   }
//   return count;
// }

const countBits = (number) => number === 0 ? 0 : number % 2 + countBits(Math.floor(number / 2));

console.log(countBits(9));
