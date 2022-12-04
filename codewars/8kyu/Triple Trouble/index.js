// @ts-check

/**
 *
 * @param {string} one
 * @param {string} two
 * @param {string} three
 * @returns {string} string
 */

function tripleTrouble(one, two, three){
  let string = ''
  for (let i = 0; i < one.length; i++) {
    string += one[i] + two[i] + three[i];
  }
  return string;
}

console.log(tripleTrouble("LLh","euo","xtr"))

function tripleTroubleVar2(one, two, three){
  let string = ''
  for (let i = 0; i < one.length; i++) {
    string += one.slice(i, i+1) + two.slice(i, i+1) + three.slice(i, i+1);
  }
  return string;
}
