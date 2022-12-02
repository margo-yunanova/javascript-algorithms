// @ts-check

/**
 * @param {string} hallway
 * @returns {number}
 */

function contact(hallway) {
  const arr = [];

  for (let i = 0; i < hallway.length; i++) {
    if (hallway[i] === '>') {
      let space = hallway.indexOf('<', i) - i;
      if (space > 0) {
        arr.push(space);
      }
    }
  }

  return arr.length === 0 ? -1 : Math.ceil(Math.min(...arr) / 2);
}

function contactVar2(hallway) {
  const arr = [];
  let arrowRight;

  for (let i = 0; i < hallway.length; i++) {
    if (hallway[i] === '>') {
      arrowRight = i;
    } else if (hallway[i] === '<' && arrowRight !== undefined) {
      arr.push(i-arrowRight);
      arrowRight = undefined;
    }
  }

  return arr.length === 0 ? -1 : Math.ceil(Math.min(...arr) / 2);
}

console.log(contact("---->---<"));
console.log(contact("----<-->---"));
console.log(contact("----><----->------<----<"));
console.log(contact(">>>>--<<<<<<<<<<<<<<<<<<<<"))
console.log(contact("->-----<--------->-------<-------"));
