const validParentheses = (parens) => {
  let counter = 0;
  if (parens.startsWith(')')) return false;
  for (const char of parens) {
    if (char === '(') {
      counter++
    } else if (counter > 0 && char === ')') {
      counter--
    } else {
      return false
    }
  }

  return counter === 0
}

console.log(validParentheses('())'));
