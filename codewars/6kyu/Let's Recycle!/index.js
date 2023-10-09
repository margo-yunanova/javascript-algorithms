function recycle(array) {
  const bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  }
  
  for (const { type, material, secondMaterial } of array) {
    bins[material].push(type);
    if (secondMaterial) {
      bins[secondMaterial].push(type);
    }
  }
  
  return Object.values(bins);
}
