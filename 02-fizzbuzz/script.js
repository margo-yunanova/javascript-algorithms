/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
*/
function getNumberFizzBuzz(digit) {
  if ((digit % 3 === 0) && (digit % 5 === 0)) {
    digit = 'fizzbuzz';
  } else if (digit % 3 === 0) {
    digit = 'fizz';
  } else if (digit % 5 === 0) {
    digit = 'buzz';
  }
  return digit;
}

function getNumberFizzBuzz2(digit) {
  if ((digit % 3 === 0) && (digit % 5 === 0)) {
    return 'fizzbuzz';
  } else if (digit % 3 === 0) {
    return 'fizz';
  } else if (digit % 5 === 0) {
    return 'buzz';
  }
  return digit;
}

function getNumberFizzBuzz3(digit) {
  return ((digit % 3 === 0) && (digit % 5 === 0)) ? 'fizzbuzz' :
          (digit % 3 === 0) ? 'fizz' :
          (digit % 5 === 0) ? 'buzz' :
           digit;
}

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    console.log(getNumberFizzBuzz(i));
  }
}

fizzBuzz(30);

// function fizzBuzz(num) {
//   let digit = 0;
//   for (let i = 1; i <= num; i++) {
//     digit = i;
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//       digit = 'fizzbuzz';
//     } else if (i % 3 === 0) {
//       digit = 'fizz';
//     } else if (i % 5 === 0) {
//       digit = 'buzz';
//     }
//     console.log(digit);
//   }
// }

// fizzBuzz(30);
