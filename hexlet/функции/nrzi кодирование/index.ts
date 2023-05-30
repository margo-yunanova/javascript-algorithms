const getNRZI = (nrzi: string) => {
  let line = "";
  let signal = 0;

  for (let i = 0; i < nrzi.length; i++) {
    if (nrzi[i] === "|") {
      signal = 1;
      continue;
    } else if (nrzi[i] === nrzi[i - 1]) {
      signal = 0;
    }

    line += signal.toString();
  }

  return line;
};

console.log(getNRZI("_|¯|____|¯|__|¯¯¯"));
