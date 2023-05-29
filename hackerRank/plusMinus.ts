const plusMinus = (arr: number[]) => {
  const total = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  for (const num of arr) {
    if (num > 0) total.positive++;
    else if (num < 0) total.negative++;
    else total.zero++;
  }

  const newArr = Object.values(total);

  for (const num of newArr) {
    console.log((num / arr.length).toFixed(6));
  }
};

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
