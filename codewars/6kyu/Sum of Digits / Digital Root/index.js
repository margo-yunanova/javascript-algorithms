const makeArrayFromNumber = (number) => number.toString().split('');
const reduceArray = (array) => array.reduce((sum, item) => sum + +item,0);


// const digitalRoot = (num) => {
//   let array = makeArrayFromNumber(num);
//   let sum = reduceArray(array)
//   while (sum >= 10) {
//     array = makeArrayFromNumber(sum);
//     sum = reduceArray(array)
//   }
//   return sum;
// }

const digitalRoot = (num) => num < 10 ? num :digitalRoot(reduceArray(makeArrayFromNumber(num)));

console.log(digitalRoot(790886));
