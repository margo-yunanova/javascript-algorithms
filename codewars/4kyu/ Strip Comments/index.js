function solution(input, markers) {
  return input.split('\n').map(string => {

    const minIndex = markers.reduce((minIndex, marker) => {
      const index = string.indexOf(marker);
      return index !== -1 ? Math.min(index, minIndex) : minIndex;
    }, string.length);

    return string.slice(0, minIndex).trim();
  }).join('\n');
};
