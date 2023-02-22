const getCountVowels = (string) => string.split('').reduce((count, letter) => 'aeiou'.includes(letter) ? count + 1 : count, 0);

console.log(getCountVowels('abracadabra'));
