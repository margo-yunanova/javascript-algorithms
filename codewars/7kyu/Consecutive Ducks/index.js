// @ts-check

/**
 *
 * @param {number} num
 *
 */

// function consecutiveDucks1(num) {
//   if (num === 1 || num > Math.pow(2, 32) - 1) {
//     return false;
//   }
//   outer: for (let i = 1; i < num; i++) {
//     let sum = i;
//     for (let j = i + 1; j < num; j++) {
//       sum += j;
//       if (sum === num) {
//         return true;
//       }
//       if (sum > num) continue outer;
//     }
//     return false;
//   }
// }

function consecutiveDucks(num) {
  if (num / 2 - num === 0.5) {
    return true;
  } else {
    outer: for (let i = 1; i < num; i++) {
      for (let j = i + 1; j < num; j++) {
        let num2 = (i + j) * (j - i + 1) / 2;
        if (num === num2) {
          return true;
        } else if (num2 > num) continue outer;
      }
    }
    return false;
  }
}

console.log(consecutiveDucks(9)); //, true)) //;
// console.log(consecutiveDucks(118070)) //, true)) //;
// console.log(consecutiveDucks(17209)) //, true)) //;
// console.log(consecutiveDucks(32768)) //, false)) //;
// console.log(consecutiveDucks(161997)) //, true)) //;
// console.log(consecutiveDucks(400779)) //, true)) //;
// console.log(consecutiveDucks(198331)) //, true)) //;
// console.log(consecutiveDucks(325482)) //, true)) //;
// console.log(consecutiveDucks(88441)) //, true)) //;
//console.log(consecutiveDucks(648)) //, true)) //;
// console.log(consecutiveDucks(65536)) //, false)) //;
// console.log(consecutiveDucks(323744)) //, true)) //;
// console.log(consecutiveDucks(183540)) //, true)) //;
// console.log(consecutiveDucks(65271)) //, true)) //;
// console.log(consecutiveDucks(5263987)) //, true)) //;
