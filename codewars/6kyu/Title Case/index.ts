const titleCase = (title: string, minorWords?: string) => {
  if (title === "") return title;
  const titleArr = title.split(" ");
  const minorArr = minorWords ? minorWords.toLowerCase().split(" ") : [];

  for (let i = 0; i < titleArr.length; i++) {
    const word = titleArr[i].toLowerCase();
    if (minorArr.includes(word) && i !== 0) {
      console.log(word);
      titleArr[i] = word;
    } else {
      console.log(word);
      titleArr[i] = word
        .split("")
        .map((char, i) => (i === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join("");
    }
  }

  return titleArr.join(" ");
};

console.log(titleCase("First a of in", "an often into"));
// console.log(titleCase("a clash of KINGS", "a an the of"));
// console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
// console.log(titleCase("the quick brown fox"));
