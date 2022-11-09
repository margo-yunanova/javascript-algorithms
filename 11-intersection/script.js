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
 * @returns {number[]} newArr
 */

function intersection(arr1, arr2) {
  let newArr = [];
  for (let item1 of arr1) {
    for (let item2 of arr2) {
      if (item1 === item2) {
        if (!newArr.includes(item1))
          newArr.push(item1);
      }
    }
  }
  return newArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
