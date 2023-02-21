const numbers = '0123456789'

const stringExpansion = (string) => {
  let newString = '';
  let number = 1;
  for (let i = 0; i < string.length; i++) {
    if (numbers.includes(string[i])) {
      number = string[i]
      continue
    }
    newString += string[i].repeat(number)
  }
  return newString;
}

console.log(stringExpansion('0d0a0v0t0y'));
