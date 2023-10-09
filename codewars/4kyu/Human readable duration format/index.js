function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const minS = 60;
  const hourS = minS * 60;
  const dayS = 24 * hourS;
  const yearS = 365 * dayS;
  const time = [yearS, dayS, hourS, minS];

  const result = [];
  for (const item of time) {
    const component = Math.floor(seconds / item);
    result.push(component);
    seconds = seconds - item * component;
  }
  result.push(seconds);

  const units = [`year`, `day`, `hour`, `minute`, `second`];

  const string = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== 0) {
      const unit = result[i] > 1 ? `${units[i]}s` : `${units[i]}`;
      string.push(`${result[i]} ${unit}`);
    }
  }

  return string
    .map((item, i, a) => {
      if (i === a.length - 2) {
        return `${item} and`;
      } else if (i === a.length - 1) {
        return item;
      }
      return `${item},`;
    })
    .join(" ");
}
