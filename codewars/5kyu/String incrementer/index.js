const incrementString = (string) => {
  const number = string.split(/[a-z]/gmi).at(-1);
  const str = string.slice(0, string.length - number.length);
  const num = +number + 1
  return str + num.toString().padStart(number.length, '0')
};
console.log(incrementString(''));
