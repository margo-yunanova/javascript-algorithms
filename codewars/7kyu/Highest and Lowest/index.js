const highAndLow = (string) => {
  const arr = string.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
