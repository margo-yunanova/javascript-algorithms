const XO = (string) => {
  const obj = {
    'x': 0,
    'o': 0,
  };
  for (const char of string.toLowerCase()) {
    if (char === 'x' || char === 'o') {
      obj[char] += 1
    }
  }
  return obj.x === obj.o
}
