function calculate(...params) {
  const sum = params.reduce((acc, num) => acc + num);
  
  return (...params) => sum + params.reduce((acc, num) => acc + num);
}
