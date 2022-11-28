// @ts-check

const isSpace = (symbol) => symbol === '';

/**
 *
 * @param {string[]} words
 * @returns {string}
 */

function formatWords(words) {
  if (words === null || !words.join()) return '';

  let arr = [];

  for (const word of words) {
    if (!isSpace(word)) {
      arr.push(word);
    }
  }

  return arr.length === 1 ? arr.join() : `${arr.slice(0, arr.length - 1).join(', ')} and ${arr[arr.length - 1]}`;
}

console.log(formatWords(['one', 'two', 'three', 'four']));
console.log(formatWords(['', '', 'three']));
console.log(formatWords([]));
console.log(formatWords(null));
console.log(formatWords(['']));
