const jadenCase = (string) => string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');

console.log(jadenCase("How can mirrors be real if our eyes aren't real"))
