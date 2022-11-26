// @ts-check

/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

function intersection(arr1, arr2) {
  const newArr = [];
  for (const item1 of arr1) {
    if (arr2.includes(item1) && !newArr.includes(item1)) {
      newArr.push(item1);
    }
  }
  return newArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
