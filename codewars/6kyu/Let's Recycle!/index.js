function recycle(array) {
  const bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  }
  
  for (const obj of array) {
    for (const prop in obj) {
      if (prop !== 'type') {
        bins[obj[prop]].push(obj.type)
      }
    }
  }
  
  return Object.values(bins);
}
