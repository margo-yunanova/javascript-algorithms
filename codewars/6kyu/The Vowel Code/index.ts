const code: string[] = ["a", "e", "i", "o", "u"];

function encode(string: string) {
  let encodeString = "";
  for (const letter of string) {
    if (code.includes(letter)) {
      encodeString += `${code.indexOf(letter) + 1}`;
    } else {
      encodeString += letter;
    }
  }
  return encodeString;
}

function decode(string: string) {
  let decodeString = "";

  for (const letter of string) {
    if (Number.isInteger(+letter)) {
      decodeString += code[+letter - 1];
    } else {
      decodeString += letter;
    }
  }

  return decodeString;
}
