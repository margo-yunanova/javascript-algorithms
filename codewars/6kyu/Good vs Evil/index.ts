const goodVsEvil = (good: string, evil: string) => {
  const goodWorth = [1, 2, 3, 3, 4, 10];
  const evilWorth = [1, 2, 2, 2, 3, 5, 10];
  const goodPeople = good.split(" ").map((item) => +item);
  const evilPeople = evil.split(" ").map((item) => +item);

  const sumGood = goodWorth.reduce(
    (sum, item, index) => sum + item * goodPeople[index],
    0
  );
  const sumEvil = evilWorth.reduce(
    (sum, item, index) => sum + item * evilPeople[index],
    0
  );
  const count = sumGood - sumEvil;

  if (count > 0) return "Battle Result: Good triumphs over Evil";
  else if (count < 0) return "Battle Result: Evil eradicates all trace of Good";
  return "Battle Result: No victor on this battle field";
};

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
