const findOdd = (array) => array.find(element => (array.reduce((sum, item) => element === item ? sum + 1 : sum, 0) % 2) !== 0);

//const findOdd = (array) => array.find(element => array.filter(item => element === item).length % 2 !== 0);

console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));

// const findOdd = (array) => {
//   if (array.length === 1) return array[0];

//   const checkedNumbers = [];

//   for (let i = 0; i < array.length; i++) {
//     if (!checkedNumbers.includes(array[i])) {
//       checkedNumbers.push(array[i]);
//       let count = 1;

//       for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) {
//           count++
//         };
//       }

//       if (count % 2 !== 0) return array[i];
//     }
//   }
// };
