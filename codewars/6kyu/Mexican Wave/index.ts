const wave = (str: string): Array<string> => {
  const waves: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    const waveStr = str
      .split("")
      .map((letter, ind) => (ind === i ? letter.toUpperCase() : letter))
      .join("");
    waves.push(waveStr);
  }
  return waves;
};

console.log(wave("two words"));
