const accum = (string) => string.split("").map((item, index) => item.toUpperCase() + item.repeat(index).toLowerCase()).join('-');

console.log(accum("AbCD"));
