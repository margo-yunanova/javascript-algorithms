function sqInRect(lng, wdth) {
  if (lng === wdth) return null;

  const array = [];
  let min = Math.min(lng, wdth);
  let max = Math.max(lng, wdth);

  while (min > 0) {
    array.push(min);
    min = Math.min(max - min, min);
    max = Math.max(max - min, min);
  }

  return array;
}
