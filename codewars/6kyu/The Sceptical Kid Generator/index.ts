const AlanAnnoyingKid = (input: string) => {
  const array = input.slice(0, -1).split(" ");

  if (array[2] === "didn't") {
    return `I don't think you didn't ${array
      .slice(3)
      .join(" ")} today, I think you did ${array[3]} it!`;
  }

  return `I don't think you ${array
    .slice(2)
    .join(" ")} today, I think you didn't ${array[2].slice(0, -2)} at all!`;
};

console.log(AlanAnnoyingKid("Today I played football."));
("I don't think you played football today, I think you didn't play at all!");

// console.log(AlanAnnoyingKid("Today I didn't attempt to hardcode this Kata."))
// "I don't think you didn't attempt to hardcode this Kata today, I think you did attempt it!"
