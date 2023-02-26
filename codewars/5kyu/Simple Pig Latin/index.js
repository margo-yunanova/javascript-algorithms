const pigIt = (string) => string.split(' ').map(item => /[^a-z]/gmi.test(item) ? item : item.slice(1) + item.at(0) + 'ay').join(' ');

console.log(pigIt('Pig latin is cool !'));
