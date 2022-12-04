// @ts-check

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */


const sumEvenNumbers = arr => arr.reduce((sum, item) => Number.isInteger(item) && item % 2 === 0 ? sum + item : sum, 0)


console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
