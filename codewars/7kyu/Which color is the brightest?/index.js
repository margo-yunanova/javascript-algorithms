function getColorValue (color) {
   let rgbColor = 0;
    for (let j = 1; j < color.length; j += 2) {
      const hexColor = color.slice(j, j + 2);
      rgbColor = Math.max(rgbColor, parseInt(hexColor, 16));
    }
    return rgbColor;
}

function brightest(colors) {
  const values = colors.map(getColorValue);

  return colors[values.indexOf(Math.max(...values))];
}
