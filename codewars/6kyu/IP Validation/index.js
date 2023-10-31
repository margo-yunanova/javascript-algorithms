function isValidIP(str) {
  const array = str.split('.');
  
  if (array.length !== 4) return false;
  
  return array.every(num => {
    if (num.length > 1 && num[0] === '0' || num.length === 0) return false;
    
    return [...num].every((char) => Number.isInteger(Number.parseInt(char))) && +num >=0 && +num <= 255;
  });  
}
