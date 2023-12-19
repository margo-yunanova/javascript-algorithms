/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let num = 0;
  const sign = Math.sign(x);
  let y = Math.abs(x);

  while (y > 0) {
    num = num * 10 + (y % 10);
    y = Math.trunc(y / 10);
  }

  num = sign * num;

  return num >= (-2) ** 31 && num <= 2 ** 31 - 1 ? num : 0;
};

console.log(reverse(-123));
