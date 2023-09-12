const diamond = (n: number) => {
  if (n % 2 === 0 || n < 0) {
    return null;
  }
  const arr: string[] = [];
  let i = 1;
  while (i <= n) {
    const space = (n - i) / 2;
    arr.push(" ".repeat(space) + "*".repeat(i) + "\n");
    i += 2;
  }
  const newArr = arr.slice(0, arr.length - 1).reverse();
  return arr.join("") + newArr.join("");
};

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
