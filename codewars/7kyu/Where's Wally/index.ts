const wheresWally = (string: string) => {
  const array = string.split(" ");
  let index = 0;
  for (const word of array) {
    if (
      word === "Wally" ||
      (word.startsWith("Wally") && `.,'`.includes(word[5]))
    ) {
      return index;
    }

    index += word.length + 1;
  }
  return -1;
};

console.log(wheresWally("Where's Wally"));
// console.log(wheresWally("Hi Wally."));
// console.log(wheresWally(""));
// console.log(wheresWally(".Wally"));
//console.log(wheresWally("It's Wally's."));
//console.log(wheresWally("Wally"));
