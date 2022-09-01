// @ts-check

/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 *
*/

/**
 * @param {number[]} arr
 * @returns {number[]} newArr
 */

function uniq2(arr) {
  const newArr = [];
  outer: for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    for (let j = 0; j < newArr.length; j++) {
      if (num === newArr[j]) continue outer;
    }
    newArr.push(num);
  }
  return newArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq2([1, 2, 5, 4, 2]));
console.log(uniq2([3, 3, 3, 5]));
console.log(uniq2([1, 4, 2, 2, 3, 4, 8]));

/**
 * @param {number[]} arr
 * @returns {number[]} newArr
 */

function uniq3(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let numInNewArr = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        numInNewArr = true;
        break;
      }
    }
    if (!numInNewArr) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq3([1, 2, 5, 4, 2]));
console.log(uniq3([3, 3, 3, 5]));
console.log(uniq3([1, 4, 2, 2, 3, 4, 8]));

/**
 * @param {number} number
 * @param {number[]} array
 * @returns {boolean}
 */

function isNumberInArray(number, array) {
  for (let j = 0; j < array.length; j++) {
    if (number === array[j]) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} arr
 * @returns {number[]} newArr
 */

function uniq(arr) {
  const newArr = [];
  // for(let i = 0; i < arr.length; i++) {
  //   if (isNumberInArray(arr[i], newArr)) continue;
  //   newArr.push(arr[i]);
  // }

  for (let i = 0; i < arr.length; i++) {
    if (!isNumberInArray(arr[i], newArr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(uniq([1, 2, 5, 4, 2]));
console.log(uniq([3, 3, 3, 5]));
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));
