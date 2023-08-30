const countCosts = (
  totalMoney: number,
  sizeInternetTariff: number,
  costExtraTariff: number,
  sizeNextMonth: number
) => {
  return sizeInternetTariff >= sizeNextMonth
    ? totalMoney
    : (sizeNextMonth - sizeInternetTariff) * costExtraTariff + totalMoney;
};

console.log(countCosts(100, 10, 12, 15));
console.log(countCosts(100, 10, 12, 1));

