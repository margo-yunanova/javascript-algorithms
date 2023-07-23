const towerBuilder = (nFloors: number): string[] => {
  const length = nFloors * 2 - 1;
  const tower: string[] = [];

  for (let i = 1; i <= length; i += 2) {
    const space = (length - i) / 2;
    tower.push(" ".repeat(space) + "*".repeat(i) + " ".repeat(space));
  }

  return tower;
};

console.log(towerBuilder(6));
