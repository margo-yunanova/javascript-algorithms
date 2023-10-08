function numberOfPairs(gloves) {
  const total = {};
  
  for (const color of gloves) {
    total[color] = (total[color] ?? 0) + 1;
  }
  
  return Object.values(total).reduce((acc, num) => acc + Math.floor(num / 2), 0);
}
