const narcissistic = (number: number) => {
  const numberAsString = number.toString();
  let multiply = 0;
  for (const number of numberAsString) {
    multiply += (+number) ** numberAsString.length;
  }
  return number === multiply;
};

console.log(narcissistic(153));

console.log(narcissistic(1652));
