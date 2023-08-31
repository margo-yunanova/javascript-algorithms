const getMinCut = (people: number) => {
  let total = 0;
  let maxPiece = people;
  while (maxPiece > 1) {
    total += 1;
    maxPiece = Math.ceil(maxPiece / 2);
  }

  return total;
};

console.log(getMinCut(6));
console.log(getMinCut(17));
console.log(getMinCut(5));
