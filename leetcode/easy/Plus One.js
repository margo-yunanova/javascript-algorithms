/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let hasCarry = true;
  const sum = digits.slice();

  for (let i = sum.length - 1; i >= 0 && hasCarry; i--) {
    const num = sum[i] + 1;

    hasCarry = num > 9;
    sum[i] = num % 10;
  }

  if (hasCarry) sum.unshift(1);

  return sum;
};
