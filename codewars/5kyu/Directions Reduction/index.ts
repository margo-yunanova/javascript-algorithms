const dirReduc = (arr: string[]) => {
  const way: string[] = [];
  const oppositeDir = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  for (const dir of arr) {
    const last = way[way.length - 1];
    if (oppositeDir[last] !== dir) {
      way.push(dir);
    } else {
      way.pop();
    }
  }

  return way;
};

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
