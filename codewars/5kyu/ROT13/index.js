function rot13(str) {
  let dStr = '';
  const small = 'abcdefghijklmnopqrstuvwxyz';
  const big = small.toUpperCase();
  
  for (const char of str) {
    const sIndex = small.indexOf(char);
    if (sIndex !== -1) {
      const newIndex = (sIndex + 13) % small.length;
      dStr += small[newIndex];
      continue;
    }
    
    const bIndex = big.indexOf(char);
    if (bIndex !== -1) {
      const newIndex = (bIndex + 13) % big.length;
      dStr += big[newIndex];
      continue;
    }
    
    dStr += char;
  }
  
  return dStr;
}
