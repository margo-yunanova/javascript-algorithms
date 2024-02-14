const prizeCounter = (s) => {
  const bonus = {
    R: 500,
    B: 300,
    G: 200,
  };

  let blockColor = "";
  let counter = 1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === blockColor) continue;

    if (s[i] === s[i - 1]) {
      counter++;
    } else {
      counter = 1;
    }

    if (counter === 3) {
      result += bonus[s[i]];
      blockColor = s[i];
    }

    result += 100;
  }

  return result;
};

console.log(prizeCounter(["R", "R", "R", "G", "B", "R", "B", "B", "B", "R"]));
console.log(prizeCounter(["R", "R", "R", "R"]));
console.log(prizeCounter(["G", "G", "B", "G", "R", "R", "B", "G", "R"]));
