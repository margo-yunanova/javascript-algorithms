// @ts-check

/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

/**
 * put words in reverse order
 * @param {string} str
 * @returns
 */

function reverseWords(str) {
  const arr = str.split(' ');
  let reverseStr = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    if (reverseStr !== '') {
      reverseStr += ' ';
    }
    reverseStr += arr[i];
  }
  return reverseStr;
}

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"

/**
 *
 * @param {string} str
 * @returns {string}
 */

function reverseWords1(str) {
  return str.replace(",", " ").split(" ").reverse().join(" ");
}

console.log(reverseWords1("всегда много путей достичь цель есть"));
console.log(reverseWords1("испробовать их все должны вы"));
console.log(reverseWords1("испробовать, их все должны вы"));
