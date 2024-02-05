const maximumWealth = (accounts: Array<Array<number>>): number => {
  let maxWealth = 0;
  for (const account of accounts) {
    const current = account.reduce((sum, item) => sum + item, 0);
    maxWealth = current > maxWealth ? current : maxWealth;
  }
  return maxWealth;
};

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
