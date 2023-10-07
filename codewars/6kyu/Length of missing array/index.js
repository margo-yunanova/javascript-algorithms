function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null) return 0;
  
  const lengths = arrayOfArrays.map(array => array === null ?  0 : array.length)
    .sort((a, b) => a - b);
  
  if (lengths[0] === 0) return 0;
  
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i+1] !== lengths[i] + 1) {
      return lengths[i] + 1;
    }
  }
  
  return 0;
}
