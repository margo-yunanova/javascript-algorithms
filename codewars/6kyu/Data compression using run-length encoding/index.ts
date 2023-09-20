const encode = (input: string) => {
  let char = input[0];
  let counter = 1;
  let encodeString = "";
  for (let i = 1; i < input.length; i++) {
    if (input[i] === char) {
      counter++;
    } else {
      encodeString += `${counter}${char}`;
      char = input[i];
      counter = 1;
    }
  }
  encodeString += `${counter}${char}`;
  return encodeString;
};

const decode = (input: string) => {
  let decodeString = "";
  let number = "";

  for (let i = 0; i < input.length; i++) {
    if (Number.isInteger(+input[i])) {
      number += input[i];
    } else {
      decodeString += input[i].repeat(+number);
      number = "";
    }
  }
  return decodeString;
};

// console.log(decode("1A"));
console.log(decode("10A1B"));
