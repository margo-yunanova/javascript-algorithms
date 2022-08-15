/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
  let arr = str.split(' ');
  let reverseStr = '';
  for(let i = arr.length - 1; i >= 0; i--) {
    if (reverseStr !== '') {
      reverseStr = reverseStr + ' '
    }
    reverseStr = reverseStr + arr[i];
  }
   console.log(typeof(reverseStr));
  return reverseStr;
}

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"
