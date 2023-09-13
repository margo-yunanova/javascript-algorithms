const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  const stock = {};
  for (const cat of listOfCat) {
    stock[cat] = 0;
  }

  for (const code of listOfArt) {
    if (listOfCat.includes(code[0])) {
      stock[code[0]] += +code.split(" ")[1];
    }
  }

  return Object.entries(stock)
    .map((item) => `(${item.join(" : ")})`)
    .join(" - ");
};

console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  )
);
