// @ts-check

/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

/**
 * check if char is in array
 * @param {string} char
 * @param {string[]} array
 * @returns {boolean}
 */
function isCharInArray(char, array) {
  for (let i = 0; i < array.length; i++) {
    if (char === array[i]) {
      return true;
    }
  }
  return false;
}

/**
 * check if char is vowel
 * @param {string} char
 * @returns {boolean}
 */
function isVowel(char) {
  return isCharInArray(char, ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']);
}

/**
 * it counts vowels in string.
 * @param {string} str a string param
 * @returns {number} count of vowels
 */

function findVowels(str) {
  let countVowels = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      countVowels++;
    }
  }
  return countVowels;
}

console.log(findVowels('здравствуй'));
console.log(findVowels('привет'));
console.log(findVowels('хеллоу'));
console.log(findVowels('парадигма'));


function findVowels2(str) {
  let countVowels = 0;
  const arrayVowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arrayVowels.length; j++) {
      if (str[i] === arrayVowels[j]) {
        countVowels++;
        break;
      }
    }
  }
  return countVowels;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels2('здравствуй'));
console.log(findVowels2('привет'));
console.log(findVowels2('хеллоу'));
console.log(findVowels2('парадигма'));

/**
 *
 * @param {string} str
 * @returns {number}
 */

const vowels1 = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];


function findVowels3(str) {
  return str.split('').filter(item => vowels1.includes(item)).length;
}

console.log(findVowels3('здравствуй'));
console.log(findVowels3('привет'));
console.log(findVowels3('хеуллоу'));


const vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];

/**
 *
 * @param {string} str
 * @returns {number}
 */

function findVowels4(str) {
  return str.split('').reduce((countVowels, char) => vowels.includes(char) ? countVowels + 1 : countVowels, 0);
}

console.log(findVowels4("здравствуй"));
console.log(findVowels4("привет"));
console.log(findVowels4("хеелоу"));
