const squareDigits = (num) => +num.toString().split('').reduce((str, num) => str + (num**2), '');

console.log(squareDigits(9119));
