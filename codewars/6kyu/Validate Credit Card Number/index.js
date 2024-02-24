function validate(n) {
  let num = n;
  let result = 0;
  while (num > 0) {
    const remainder = num % 100;
    result += remainder % 10;
    let integer = Math.trunc(remainder / 10) * 2;
    while (integer >= 10) {
      integer -= 9;
    }
    result += integer;
    num = Math.trunc(num / 100);
  }

  return result % 10 === 0;
}

console.log(validate(8675309));
