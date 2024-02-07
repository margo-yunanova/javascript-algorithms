function encrypt(text, n) {
  if (!text || n < 0) return text;

  let string = text;

  for (let i = 0; i < n; i++) {
    let even = "";
    let odd = "";

    for (let j = 0; j < string.length; j++) {
      if (j % 2 === 0) {
        even += string[j];
      } else {
        odd += string[j];
      }
    }
    string = odd + even;
  }

  return string;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n < 0) return encryptedText;

  const length = Math.floor(encryptedText.length / 2);
  let string = encryptedText;

  for (let i = 0; i < n; i++) {
    const even = string.slice(length);
    const odd = string.slice(0, length);
    string = "";
    for (let j = 0; j <= length; j++) {
      string += (even[j] ?? "") + (odd[j] ?? "");
    }
  }
  return string;
}
