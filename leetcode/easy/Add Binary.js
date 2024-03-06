/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const max = Math.max(a.length, b.length);
  const aS = a.padStart(max, '0');
  const bS = b.padStart(max, '0');
  let sum = '';
  let carry = 0;
  for (let i = max - 1; i >= 0; i--) {
    const num = +aS[i] + +bS[i] + carry;
    if (num > 1) {
      sum = num % 2 + sum;
      carry = 1;
      continue;
    }

    sum = num + sum;
    carry = 0;
  }

  return carry === 1 ? carry + sum : sum;
};
