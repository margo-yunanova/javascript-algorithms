var isValid = function(s) {
    const open = "([{";
    const close = ")]}";
    const arr = [];

    for (const char of s) {
      const index = open.indexOf(char);
      if (index !== -1) {
        arr.push(index);
        continue;
      }

      if (arr.pop() !== close.indexOf(char))
        return false;
    }

    return arr.length === 0;
};
