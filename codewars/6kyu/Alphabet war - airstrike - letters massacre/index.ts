const alphabetWar = (fight: string) => {
  let survived: string[] = [];

  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "*") {
      if (survived.at(-1) && survived.at(-1) !== "_") {
        survived.pop();
      }
      survived.push("_");
      if (fight[i + 1] !== "*") {
        survived.push("_");
        i++;
      }
    } else {
      survived.push(fight[i]);
    }
  }

  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let leftPoints = 0;
  let rightPoints = 0;

  for (let i = 0; i < survived.length; i++) {
    if (Object.hasOwn(left, survived[i])) {
      leftPoints += left[survived[i]];
    } else if (Object.hasOwn(right, survived[i])) {
      rightPoints += right[survived[i]];
    }
  }

  return leftPoints > rightPoints
    ? "Left side wins!"
    : leftPoints < rightPoints
    ? "Right side wins!"
    : `Let's fight again!`;
};

console.log(alphabetWar(""));

console.log(alphabetWar("z"));
console.log(alphabetWar("****"));
console.log(alphabetWar("z*dq*mw*pb*s"));
console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("zz*zzs"));
console.log(alphabetWar("sz**z**zs"));
console.log(alphabetWar("z*z*z*zs"));
console.log(alphabetWar("*wwwwww*z*"));
