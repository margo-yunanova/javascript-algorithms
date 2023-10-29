function solution(list) {
  const result = [];
  let temp = 0;
  for (let i = 0; i < list.length; i++) {
    const prev = list[i - 1];
    const curr = list[i];
    const next = list[i + 1];
    
    if (curr - prev !== 1 && next - curr === 1) {
      temp = curr;
    }
    
    if (curr - prev !== 1 && next - curr !== 1) {
      result.push(curr);
    } 
    
    if (curr - prev === 1 && next - curr !== 1) {
      if (curr - temp === 1) {
        result.push(temp, curr);
      } else {
        result.push([temp, curr].join('-'));
      }
    } 
    
  }

  return result.join(",");
}
