// @ts-check

/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

/**
 *
 * @param {string} str
 * @returns {string} capitalStr
 */

function capitalize2(str) {
  let capitalStr = '';
  let char;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      char = i
    }
    capitalStr = capitalStr + str[i]
  }
  return capitalStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize2('молодость всё простит'));

/**
 *
 * @param {string} str
 * @returns {string} capitalStr
 */

function capitalize(str) {
  return str.split(' ').map(item => item === '' ? '' : item[0].toUpperCase() + item.slice(1)).join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит'));
