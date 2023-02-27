const points = {
  '3': {
    '1': 1000,
    '2': 200,
    '3': 300,
    '4': 400,
    '5': 500,
    '6': 600
  },
  '1': {
    '1': 100,
    '5': 50
  }
};

const score = (dice) => {
  const accum = {};
  for (const num of dice) {
    accum[num] = (accum[num] ?? 0) + 1;
  }
  let scoreCounter = 0;

  for (const [key, value] of Object.entries(accum)) {
    const threePoint = Math.floor(value / 3);
    const remainder = value % 3;
    scoreCounter += points[3][key] * threePoint + (points[1][key] ?? 0) * remainder;
  }
  return scoreCounter;
};

console.log(score([]));
