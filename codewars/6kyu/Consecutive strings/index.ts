function longestConsec(strarr: string[], k: number): string {
  if (k <= 0 || k > strarr.length || strarr.length === 0) return "";
  const string = strarr
    .slice(0, strarr.length - k + 1)
    .map((_, index) => strarr.slice(index, index + k).join(""));

  const length = string.map((string) => string.length);
  const max = Math.max(...length);

  return string[length.indexOf(max)];
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);

// console.log(
//   longestConsec(
//     [
//       "ejjjjmmtthh",
//       "zxxuueeg",
//       "aanlljrrrxx",
//       "dqqqaaabbb",
//       "oocccffuucccjjjkkkjyyyeehh",
//     ],
//     1
//   )
// );

//console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
