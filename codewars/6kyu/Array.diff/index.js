const arrayDiff = (a, b) => a.filter(itemA => b.every(itemB => itemA !== itemB))

console.log(arrayDiff([1,2,3], [1, 2]));
