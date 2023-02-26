const sumTwoSmallestNumbers = (array) => array.sort((a,b) => a - b).slice(0,2).reduce((sum, item) => sum + item)

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
