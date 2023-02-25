const isIsogram = (str) => str.toLowerCase().split('').every((item, index, arr) => arr.indexOf(item, index + 1) === -1)

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram('aba'));
