function abbreviate(string) {
  return string
    .split(" ")
    .map((item) => {
      return item
        .split(",")
        .map((item) =>
          item
            .split("-")
            .map((item) =>
              item.length < 4 ? item : `${item[0]}${item.length - 2}${item.at(-1)}`
            )
            .join("-")
        )
        .join(",");
    })
    .join(" ");
}
