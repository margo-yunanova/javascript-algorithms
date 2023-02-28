const order = (string) => {
  if (string.length === 0) return string;
  const newString = [];
  const array = string.split(' ');
  outer: for (const word of array) {
    for (let i = 1; i <= 9; i++) {
      if (word.includes(i)) {
        newString[i-1] = word
        continue outer;
      }
    }
  }
  return newString.join(' ');
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
