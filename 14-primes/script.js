// @ts-check

/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
*/

/**
 * @param {number} number
 * @returns {Boolean}
 */

function isPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}

/**
 * @param {number} num
 * @returns {number[]}
 */

function primes(num) {
  const arrayPrimes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      arrayPrimes.push(i);
    }
  }
  return arrayPrimes;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
