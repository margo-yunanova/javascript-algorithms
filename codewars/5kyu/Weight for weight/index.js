const orderWeight = (string) => {
  return string.split(' ').sort((a,b) => {
    const sumA = a.split('').reduce((sum, num) => sum + +num, 0);
    const sumB = b.split('').reduce((sum, num) => sum + +num, 0);
    if (sumA === sumB) {
      if (a < b) return -1;
      if (a > b) return 1;
      else return 0
    } else {
      return sumA - sumB
    }
  }).join(' ');
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
