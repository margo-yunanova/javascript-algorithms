/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
  let quantityZero = 0;
  for (let i = 1; i <= n; i++) {
    for (let symbol of String(i)) {
      if (symbol === '0') {
        quantityZero++;
      }
    }
  }
  return quantityZero;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
