const getMenCountByYear = (
  users: Array<{ name: string; gender: string; birthday: string }>
): Record<string, number> => {
  return users.reduce((total, user) => {
    if (user.gender !== "male") return total;
    const year = user.birthday.slice(0, 4);
    total[year] = (total[year] ?? 0) + 1;
    return total;
  }, {});
};

const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Reigar", gender: "male", birthday: "1973-11-03" },
  { name: "Eiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Sansa", gender: "female", birthday: "2012-11-03" },
  { name: "Jon", gender: "male", birthday: "1980-11-03" },
  { name: "Robb", gender: "male", birthday: "1980-05-14" },
  { name: "Tisha", gender: "female", birthday: "2012-11-03" },
  { name: "Rick", gender: "male", birthday: "2012-11-03" },
  { name: "Joffrey", gender: "male", birthday: "1999-11-03" },
  { name: "Edd", gender: "male", birthday: "1973-11-03" },
];

console.log(getMenCountByYear(users));
