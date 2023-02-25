let indent = 0;
const flog = (f) => (...args) => {
  console.log('  '.repeat(indent), 'fibonacci(',...args,') ... считает')
  indent++;
  const result = f(...args);
  indent--;
  console.log('  '.repeat(indent),'fibonacci(', ...args,')', ' = ', result)
  return result;
}

const fibonacci = flog((index) => {
  if (index === 0) return 0;
  if (index === 1) return 1;
  if (index >= 2 ) {
    return fibonacci(index - 1) + fibonacci(index - 2)
  }
})

console.log(fibonacci(10));
