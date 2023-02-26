const alphabet = "abcdefghijklmnopqrstuvwxyz";

const rot13 = (message) => message.split("").map((item) => {
  if (alphabet.includes(item.toLowerCase())) {
    let index = alphabet.indexOf(item.toLowerCase());
    index = (index + 13) % alphabet.length;
    return alphabet.includes(item)
      ? alphabet[index]
      : alphabet[index].toUpperCase();
  } else {
    return item;
  }
  }).join("");

console.log(rot13("Test"));
