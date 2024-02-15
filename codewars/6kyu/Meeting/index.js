function meeting(s) {
  const arr = s
    .toUpperCase()
    .split(";")
    .map((fullname) => {
      const [first, second] = fullname.split(":");
      return `(${second}, ${first})`;
    });

  return arr.sort().join("");
}
console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
