function int32ToIp(int32){
  const arr = [];
  
  let num = int32;

  for (let i = 3; i >= 0; i--) {
    arr[i] = num % 256;
    num = Math.trunc(num / 256);
  }
    
  return arr.join('.');
}
