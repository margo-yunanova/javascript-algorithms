function zeros(n) {
  let counter = 0;
  let num = n;

  while (num > 0) {
    num = Math.trunc(num / 5);
    counter += num;
  }

  return counter;
}
