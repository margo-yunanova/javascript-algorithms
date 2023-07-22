const scramble = (str1: string, str2: string) => {
  const totalStr1 = {};
  const totalStr2 = {};
  for (const letter of str1) {
    totalStr1[letter] = (totalStr1[letter] ?? 0) + 1;
  }
  for (const letter of str2) {
    totalStr2[letter] = (totalStr2[letter] ?? 0) + 1;
  }
  for (const key in totalStr2) {
    if (!Object.hasOwn(totalStr1, key) || totalStr1[key] < totalStr2[key])
      return false;
  }

  return true;
};

console.log(scramble("katas", "steak"));
console.log(scramble("rkqodlw", "world"));
