function countSmileys(arr: string[]) {
  const smilingRules = {
    eyes: [";", ":"],
    nose: ["-", "~"],
    mouth: [")", "D"],
  };

  let counter = 0;

  for (const smile of arr) {
    if (smilingRules.eyes.includes(smile[0])) {
      if (smilingRules.nose.includes(smile[1])) {
        if (smilingRules.mouth.includes(smile[2])) {
          counter++;
        }
      } else {
        if (smilingRules.mouth.includes(smile[1])) {
          counter++;
        }
      }
    }
  }

  return counter;
}

console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
//769
