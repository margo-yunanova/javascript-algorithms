function solve(s) {
  const vowel = 'aeiou';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  const values = [];
  let value = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      values.push(value);
      value = 0;
      continue;
    };
        
    value += alphabet.indexOf(s[i]) + 1;
  }
  
  values.push(value);
  
  return Math.max(...values);
};
