// @ts-check

/**
 * @param {string} hallway
 * @returns {number}
 */

function contact(hallway) {
  const arr = [];

  outer: for (let i = 0; i < hallway.length; i++) {
    if (hallway[i] === '>') {
      for (let k = i + 1; k < hallway.length; k++) {
        if (hallway[k] === '<') {
          arr.push(k - i);
          continue outer;
        }
      }
    }

  }

  if (Math.min(...arr) === 0) {
    return 1;
  } else if (arr.length === 0) {
    return -1;
  } else {
    return (Math.ceil(Math.min(...arr) / 2));
  }
}

// console.log(contact("---->---<"))
// console.log(contact("----<-->---"))
// console.log(contact("----><-----"))
//console.log(contact(">>>>--<<<<<<<<<<<<<<<<<<<<"))
console.log(contact(">---------<"));
