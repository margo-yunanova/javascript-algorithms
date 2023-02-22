const likes = (names) => {
  const [firstName, secondName, thirdName] = names;
  const phrases = {
    '0': "no one likes this",
    '1': `${firstName} likes this`,
    '2': `${firstName} and ${secondName} like this`,
    '3': `${firstName}, ${secondName} and ${thirdName} like this`,
    '4': `${firstName}, ${secondName} and ${names.length - 2} others like this`
  }
  return names.length > 3 ? phrases['4'] : phrases[names.length];
}

console.log(likes(["Jacob", "Alex"]));
