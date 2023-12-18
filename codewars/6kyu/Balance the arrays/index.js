const totalValue = (arr) => {
  const total = {}
  for (const item of arr) {
    total[item] = total[item] === undefined ? 0 : total[item] + 1;
  }
  return Object.values(total).sort((a,b) => a-b)
}

function balance (arr1, arr2){
  const total1 = totalValue(arr1);
  const total2 = totalValue(arr2);
  return total1.length === total2.length && total1.every((item, i) => item === total2[i])
}
