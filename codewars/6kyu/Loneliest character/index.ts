const loneliest = (string: string) => {
  const trimString = string.trim();
  const total: Record<string, number> = {};

  for (let i = 0; i < trimString.length; i++) {
    if (trimString[i] === " ") continue;
    let counter = 0;
    for (let j = i - 1; trimString[j] === " "; j--) {
      counter++;
    }
    for (let j = i + 1; trimString[j] === " "; j++) {
      counter++;
    }
    total[trimString[i]] = counter;
  }

  const max = Math.max(...Object.values(total));
  return Object.entries(total)
    .filter((item) => item[1] === max)
    .map((item) => item[0]);
};

//console.log(loneliest("a b  c"));
console.log(loneliest("a  b  c  de"));
