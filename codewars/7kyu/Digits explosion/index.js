function explode(strings) {
  let string = '';
  for (const num of strings) {
    string += num.repeat(+num);
  }
  return string;
}
