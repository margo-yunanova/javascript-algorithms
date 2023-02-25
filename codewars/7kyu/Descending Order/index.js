const descendingOrder = num => num < 10 ? num : Number(num.toString().split('').sort((a,b) => b - a).join(''));

console.log(descendingOrder(15));
