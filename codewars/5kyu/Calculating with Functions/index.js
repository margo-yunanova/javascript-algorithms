const numberFunction = (num) => (operator) => !operator ? num : operator(num);

const zero = numberFunction(0);
const one = numberFunction(1);
const two = numberFunction(2);
const three = numberFunction(3);
const four = numberFunction(4);
const five = numberFunction(5);
const six = numberFunction(6);
const seven = numberFunction(7);
const eight = numberFunction(8);
const nine = numberFunction(9);

const plus = (a) => (b) => b + a;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => b * a;
const dividedBy = (a) => (b) => Math.floor(b / a);

console.log(seven(times(five())));
console.log(four(plus(nine())));

//615 -
