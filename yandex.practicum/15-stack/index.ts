import { Stack } from "./Stack";

const isValid = (string: string) => {
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const openedBracket = Object.values(pair);

  const stack = new Stack<string>();

  for (const char of string) {
    if (openedBracket.includes(char)) {
      stack.push(char);
    } else if (stack.peek() === pair[char]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.getSize() === 0;
};

console.log(isValid("(((((((((("));
console.log(isValid("()()()()()(){}"));
console.log(isValid("})()(){}{}}{}"));
console.log(isValid("(}()(){}{}}{}"));
