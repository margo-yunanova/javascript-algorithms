const getMinCut = (people: number) => {
  let total = 0;
  let maxPiece = people;
  for (total; maxPiece > 1; total++) {
    maxPiece = Math.max(Math.ceil(maxPiece / 2), Math.floor(maxPiece / 2));
  }

  return total;
};

console.log(getMinCut(6));
console.log(getMinCut(17));
console.log(getMinCut(5));
