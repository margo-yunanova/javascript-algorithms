function validate(n) {
  let num = n;
  let result = 0;
  while (num > 0) {
    const remainder = num % 100;
    result += remainder % 10;
    const integer = Math.trunc(remainder / 10) * 2;
    result += integer > 9 ? integer - 9 : integer;
    num = Math.trunc(num / 100);
  }

  return result % 10 === 0;
}

console.log(validate(8675309));
