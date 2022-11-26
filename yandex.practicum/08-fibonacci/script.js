// @ts-check

/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
 */

/**
 *
 * @param {number} n
 * @returns {number}
 */

function fibonacci(n) {
  let first = 0;
  let second = 1;
  let third = 0;
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    for (let i = 3; i <= n; i++) {
      third = first + second;
      first = second;
      second = third;
    }
  }
  return third;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci(11));
console.log(fibonacci(12));
console.log(fibonacci(13));
console.log(fibonacci(14));
console.log(fibonacci(15));
console.log(fibonacci(16));
console.log(fibonacci(17));
console.log(fibonacci(18));
console.log(fibonacci(19));
console.log(fibonacci(20));
console.log(fibonacci(21));
console.log(fibonacci(22));
console.log(fibonacci(23));
