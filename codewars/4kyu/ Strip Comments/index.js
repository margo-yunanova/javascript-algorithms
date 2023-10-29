function solution(input, markers) {
  return input.split('\n').map(string => {
    let minIndex = string.length;    
    for (const marker of markers) {
      const index = string.indexOf(marker);
      if (index !== -1) {
        minIndex = Math.min(index, minIndex);
      }
    }
    return string.slice(0, minIndex).trim();
  }).join('\n')
};
