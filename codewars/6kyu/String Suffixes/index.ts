const similarity = (string: string, suffix: string) => {
  let j = 0;
  while (j < suffix.length && string[j] === suffix[j]) {
    j++;
  }
  return j;
};

const stringSuffix = (string: string) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    counter += similarity(string, string.substring(i));
  }
  return counter;
};

console.log(stringSuffix("ababaa"));
