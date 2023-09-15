function isSpecial(numbers: string) {
  let num = 0;
  for (let i = 0; i < numbers.length; i++) {
    num += (+numbers[i]) ** 3;
  }
  return num % 2 === 0;
}

function revRot(s: string, sz: number): string {
  if (sz <= 0 || !s.length) return "";

  const chunks: string[] = [];

  for (let i = 0; i < s.length; i += sz) {
    const subString = s.slice(i, i + sz);
    if (subString.length < sz) break;
    chunks.push(subString);
  }

  let string = "";

  for (const chunk of chunks) {
    if (isSpecial(chunk)) {
      console.log(chunk);
      string += chunk.split("").reverse().join("");
    } else {
      string += chunk.slice(1) + chunk[0];
    }
  }

  return string;
}

console.log(revRot("733049910872815764", 5));
