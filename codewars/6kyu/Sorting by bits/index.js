function sortByBit(arr) {
  const comparator = (a, b) => {
    const first = [...a.toString(2)].reduce((acc, num) => acc + +num, 0);
    const second = [...b.toString(2)].reduce((acc, num) => acc + +num, 0);
    if (first > second) return 1;
    else if (first < second) return -1;
    else {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
  }
  return arr.sort(comparator)
}
