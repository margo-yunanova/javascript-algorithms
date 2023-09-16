function sumDigPow(a: number, b: number) {
  const arr: number[] = [];
  for (let i = a; i <= b; i++) {
    const numAsStr = i.toString();
    let sum = 0;
    for (let j = 0; j < numAsStr.length; j++) {
      sum += (+numAsStr[j]) ** (j + 1);
    }
    if (i === sum) arr.push(i);
  }
  return arr;
}
