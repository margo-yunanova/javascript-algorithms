const countCosts = (
  totalMoney: number,
  sizeInternetTariff: number,
  costExtraTariff: number,
  sizeNextMonth: number
) => {

  return totalMoney + Math.max(sizeNextMonth - sizeInternetTariff, 0) * costExtraTariff
};

console.log(countCosts(100, 10, 12, 15));
console.log(countCosts(100, 10, 12, 1));

