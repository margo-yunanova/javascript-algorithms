const add1 = (a: string, b: string) => {
  let sum = "";
  let temp = 0;

  const max = Math.max(a.length, b.length);
  a = a.padStart(max, "0");
  b = b.padStart(max, "0");

  for (let i = max - 1; i >= 0; i--) {
    const num = +a[i] + +b[i] + temp;
    sum = (num % 10) + sum;
    temp = Math.trunc(num / 10);
  }

  return temp > 0 ? "1" + sum : sum;
};

const add = (a: string, b: string) => {
  let sum = "";
  let temp = 0;

  const max = Math.max(a.length, b.length);

  for (let i = 1; i <= max; i++) {
    const num = +(a[a.length - i] ?? 0) + +(b[b.length - i] ?? 0) + temp;
    // const num =
    //   +(a[a.length - i] === undefined ? 0 : a[a.length - i]) +
    //   +(b[b.length - i] === undefined ? 0 : b[b.length - i]) +
    //   temp;
    sum = (num % 10) + sum;
    temp = Math.trunc(num / 10);
  }

  return temp > 0 ? "1" + sum : sum;
};

//console.log(add("123", "456"));
console.log(add("888", "222"));
// console.log(add("12", "456"));
console.log(add("1372", "69"));
