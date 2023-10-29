function solution(input, markers) {
  const array = input.split('\n');
  const result = [];
  
  for (const string of array) {
    let minIndex = string.length;    
    for (const marker of markers) {
      const index = string.indexOf(marker);
      if (index !== -1) {
        minIndex = Math.min(index, minIndex);
      }
    }
    const newString = string.slice(0, minIndex).trim();
    
    result.push(newString)
  }
  
  return result.join('\n')
};
