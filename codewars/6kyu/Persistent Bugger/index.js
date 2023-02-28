const persistence = (number) => {
  let count = 0;
  let array = number.toString().split('');
  while (array.length > 1) {
    array = array.reduce((acc, item) => acc * +item, 1).toString().split('');
    count++
  }
  return count;
}

console.log(persistence(999));
