function camelCase(str: string): string {
  return str
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, i) => (i === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join("")
    )
    .join("");
}
