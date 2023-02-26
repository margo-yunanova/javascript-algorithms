const getHex = (color) => {
  if (color < 0) {
    return "00";
  } else if (color > 255) {
    return "FF";
  }

  return color.toString(16).toUpperCase().padStart(2, '0');
};

const rgb = (r, g, b) => [r, g, b].map((color) => getHex(color)).join("");

console.log(rgb(37, 14, 222));
