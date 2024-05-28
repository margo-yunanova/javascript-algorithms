function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  let leftToSaveMoney = startPriceNew - startPriceOld;
  let monthCounter = 0;
  let currentPriceOld = startPriceOld;
  let currentPriceNew = startPriceNew;
  let currentPercentLossByMonth = percentLossByMonth;

  while (leftToSaveMoney > 0) {
    monthCounter++;

    if (monthCounter % 2 === 0) currentPercentLossByMonth += 0.5;

    currentPriceOld -= currentPriceOld * (currentPercentLossByMonth / 100);
    currentPriceNew -= currentPriceNew * (currentPercentLossByMonth / 100);
    leftToSaveMoney = currentPriceNew - currentPriceOld - savingperMonth * monthCounter;
  }

  return [monthCounter, Math.round(Math.abs(leftToSaveMoney))];
}
