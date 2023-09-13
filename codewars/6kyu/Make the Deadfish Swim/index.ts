function parse(data: string): number[] {
  type TOperation = {
    [key: string]: (n: number, arr: number[]) => number;
  };

  const operation: TOperation = {
    i: (n: number) => n + 1,
    d: (n: number) => n - 1,
    s: (n: number) => n ** 2,
    o: (n: number, arr: number[]) => {
      arr.push(n);
      return n;
    },
  };

  const arr: number[] = [];
  let n: number = 0;
  for (let j = 0; j < data.length; j++) {
    if (!Object.hasOwn(operation, data[j])) continue;
    n = operation[data[j]](n, arr);
  }

  return arr;
}

console.log(parse("iiisdoso"));
