function presses(phrase) {
  const keypads = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', '*', ' 0', '#'];
  let counter = 0;
  
  const string = phrase.toUpperCase();
  
  for (const char of string) {
    for (const item of keypads) {
      const position = item.indexOf(char);
      if (position !== -1) {
        counter += position + 1;
        break;
      }
    }
  }

  
  return counter;
}
