const firstNonRepeatingLetter = (string) => {
  const newString = string.toLowerCase();
  let checkedLetters = '';
  for (let i = 0; i < newString.length; i++) {
    if (checkedLetters.includes(newString[i])) continue;
    else {
      checkedLetters += newString[i];
    }

    if (newString.indexOf(newString[i]) === newString.lastIndexOf(newString[i])) {
      return string[i];
    }
  }
  return '';
};

console.log(firstNonRepeatingLetter('moonmen'));
