const getLettersFrequency = (string: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const obj: Record<string, number> = {};
  for (const letter of string) {
    if (alphabet.includes(letter)) {
      obj[letter] = (obj[letter] ?? 0) + 1;
    }
  }

  return obj;
};

export const mix = (s1: string, s2: string): string => {
  const freq1 = getLettersFrequency(s1);
  const freq2 = getLettersFrequency(s2);
  const uniqLet = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);

  const arr: string[][] = [];

  for (const key of uniqLet) {
    const num1 = freq1[key] ?? 0;
    const num2 = freq2[key] ?? 0;
    if (num1 <= 1 && num2 <= 1) continue;
    if (num1 > num2) {
      arr.push(["1:", key.repeat(num1)]);
    } else if (num2 > num1) {
      arr.push(["2:", key.repeat(num2)]);
    } else {
      arr.push(["=:", key.repeat(num1)]);
    }
  }

  const comparator = (a: string[], b: string[]) => {
    if (a[1].length === b[1].length) {
      if (a.join("") > b.join("")) return 1;
      if (a.join("") < b.join("")) return -1;
      return 0;
    }
    return b[1].length - a[1].length;
  };

  return arr
    .sort(comparator)
    .map((item) => item.join(""))
    .join("/");
};

console.log(mix(" In many languages", " there's a pair of functions"));
//"1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"

console.log(mix("looping is fun but dangerous", "less dangerous than coding"));
//"1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
