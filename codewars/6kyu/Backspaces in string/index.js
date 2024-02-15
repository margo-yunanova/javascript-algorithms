function cleanString(s) {
  const arr = [];
  
  for (const char of s) {
    if (char !== '#') {
      arr.push(char);
    } else {
      arr.pop();
    }
  }
  
  return arr.join('');
}
