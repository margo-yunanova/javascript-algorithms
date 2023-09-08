const expandedForm = (num: number): string => {
  const classNum = "0".repeat(num.toString().length - 1);

  const remainder = num % +("1" + classNum);

  if (remainder === 0) {
    return num.toString();
  }

  const string = num.toString()[0] + classNum;

  return string + " + " + expandedForm(remainder);
};

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
console.log(expandedForm(8481600));
