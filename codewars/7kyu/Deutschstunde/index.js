// @ts-check

/**
 * @param {string} letter
 * @returns {boolean}
 */

const isVowel = (letter) => 'aeiouäöü'.includes(letter);

/**
 *
 * @param {string} wort
 * @returns {string}
 */

function derDieDas(wort) {
  let countVowels = 0;

  for (const letter of wort.toLowerCase()) {
    if (isVowel(letter)) {
      countVowels++;
    }
  }

  if (countVowels < 2) return `das ${wort}`;
  else if (countVowels > 3) return `der ${wort}`;
  else return `die ${wort}`;

}

console.log(derDieDas('Suppenhuhn'));
