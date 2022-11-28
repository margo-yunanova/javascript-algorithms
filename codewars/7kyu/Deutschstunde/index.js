// @ts-check

/**
 * @param {string} letter
 * @returns {boolean}
 */

const isVowel = (letter) => ["a", "e", 'i', 'o', 'u', 'ä', 'ö', 'ü'].includes(letter);

/**
 *
 * @param {string} wort
 * @returns {string}
 */

function derDieDas(wort) {
  const arr = wort.toLowerCase().split('');
  let countVowels = 0;

  for (let letter of arr) {
    if (isVowel(letter)) {
      countVowels++;
    }
  }

  if (countVowels < 2) return `das ${wort}`;
  else if (countVowels > 3) return `der ${wort}`;
  else return `die ${wort}`;

}

console.log(derDieDas('Suppenhuhn'));
