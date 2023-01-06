// @ts-check

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */

const repeats = arr => arr.filter((item, index) => arr.some((item2, index2) => {
  console.log(item, index, item2, index2)
  return item === item2 && index === index2 && index !== index2

})).reduce((sum, item) => sum+item);


console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]))

const repeatsVar2 = arr => arr.filter((item) => !arr.includes(item, arr.indexOf(item)+1)).reduce((sum, item) => sum+item);
