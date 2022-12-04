// @ts-check

/**
 *
 * @param {number[]} list
 * @returns {number}
 */

const maxDiff = list => list.length === 0 ? 0 : Math.max(...list) - Math.min(...list);

console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]));
console.log(maxDiff([16]))
console.log(maxDiff([]))

function maxDiffVar2(list) {
  list.sort((a, b) =>  a-b);
  return list.length === 0 ? 0 : list[list.length-1] - list[0]
};
