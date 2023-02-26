const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetPosition = (text) => (text.toLowerCase().match(/[a-z]/gi) ?? []).map(item => alphabet.indexOf(item) + 1).join(' ');

console.log(alphabetPosition("The sunset sets."));
