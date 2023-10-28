function productFib(prod){
  let prev1 = 1;
  let prev2 = 1;
  
  while (prev1 * prev2 < prod) {
    let curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr
  }
  
  return [prev1, prev2, prev1 * prev2 === prod];
}
