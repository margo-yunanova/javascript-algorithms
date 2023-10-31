function validBraces(braces){
  const matchingBraces = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  
  const stack = [];
  
  for (const brace of braces) {
    if (Object.hasOwn(matchingBraces, brace)) {
      stack.push(brace)
    } else if (matchingBraces[stack.at(-1)] === brace) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
}
