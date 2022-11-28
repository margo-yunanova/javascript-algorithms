const first = (arr, n = 1) => n === 1 ? [arr[0]] : arr.slice(0, n)


const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first([...arr]));
console.log(first([...arr], 0));
console.log(first([...arr], 2))
