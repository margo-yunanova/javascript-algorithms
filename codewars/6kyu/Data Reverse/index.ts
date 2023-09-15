function dataReverse(data: string[]) {
  const bytes: string[][] = [];

  for (let i = 0; i < data.length; i += 8) {
    bytes.push(data.slice(i, i + 8));
  }

  return bytes.reverse().flat();
}
