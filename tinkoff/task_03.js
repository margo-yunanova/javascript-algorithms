var readline = require("readline");
var fs = require("fs");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total = 0;
const data = [];

process.stdin.on("end", () => {
  console.log("stdin", total);
  process.exit(0);
});

rl.on("line", function (line) {
  data.push(line);
});

rl.on("close", function () {
  const [colleagues, deadline] = data[0].split(" ").map(Number);
  const floors = data[1].split(" ").map(Number);
  const mainColleague = Number(data[2]);

  const firstFloor = floors[0];
  const lastFloor = floors[colleagues - 1];
  const mainFloor = floors[mainColleague - 1];

  if (
    mainFloor - firstFloor <= deadline ||
    lastFloor - mainFloor <= deadline
  ) {
    total = lastFloor - firstFloor;
    console.log("if", total);
  } else {
    const up = lastFloor - mainFloor;
    const down = mainFloor - firstFloor;
    total = Math.min(up, down) + lastFloor - firstFloor;
    console.log("else", total);
  }
});
