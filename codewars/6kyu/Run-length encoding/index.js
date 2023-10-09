var runLengthEncoding = function(str){
  let counter = 0;
  let letter = str[0];
  const result = [];
  
  for (const char of str) {
    if (char === letter) {
      counter++;
    } else {
      result.push([counter, letter]);
      counter = 1;
      letter = char;
    }
  }
  
  if (counter !== 0) {
    result.push([counter, letter]);
  }
  
  return result;
}
