// @ts-check

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */

function solution(arr) {
  let counter = 0;
  let index = 0;
  const newArr = [];
  while (true) {
    console.log(index)
    newArr.push(index);
    index = arr[index] + index;
    counter++;
    if (index >= arr.length || index < 0) break;
    else if (arr[index] === 0 || newArr.includes(index)) return -1;
  }
  return counter;
}

function solutionVar2(arr) {
  let counter = 0;
  let index = 0;
  while (true) {
    index = arr[index] + index;
    counter++;
    if (index >= arr.length || index < 0) break;
    else if (arr[index] === 0 || counter === arr.length) return -1;
  }
  return counter;
}

console.log(solution([7,-4,-4,2,-2,2,5,6,1,2,0,3,6,9,6,-4,0,1,3,0,8,-4,-4]));
console.log(solution([3, 9, -2, -4, -2, 8, 4, 6, -4, -1, 8, 4, 0, -2, -4, 4]));
console.log(solution([1, 2, 1, 5]));
console.log(solution([1, -1]));
console.log(solution([-3]));
