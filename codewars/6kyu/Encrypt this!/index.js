var encryptThis = function (text) {
  const words = text.split(" ");
  let encrypted = [];

  for (const word of words) {
    let string = word.charCodeAt(0);

    if (word.length > 2) {
      string += word.at(-1) + word.slice(2, -1) + word.at(1);
    } else {
      string += word.at(1) ?? "";
    }

    encrypted.push(string);
  }

  return encrypted.join(" ");
};
