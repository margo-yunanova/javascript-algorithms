const duplicateCount = (text) => {
  const array = [];

  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i], i + 1) >= 0) {
      if (!array.includes(text[i])) {
        array.push(text[i]);
      }
    }
  }
  console.log(array);
  return array.length;
};

console.log(duplicateCount("Indivisibility"));
