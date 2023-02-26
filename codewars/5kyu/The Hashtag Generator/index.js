const generateHashtag = (string) => {
  let newString = string.trim().split(' ').filter(item => item !== '');
  if (newString.length === 0) return false;
  newString = newString.reduce((str, word) => str + word[0].toUpperCase() + word.slice(1).toLowerCase(), '#');
  return newString.length > 140 ? false : newString;
}



console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
