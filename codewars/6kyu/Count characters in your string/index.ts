const count = (string: string) =>
  [...string].reduce(
    (obj, char) => ({ ...obj, [char]: (obj[char] ?? 0) + 1 }),
    {}
  );

console.log(count("aba"));
