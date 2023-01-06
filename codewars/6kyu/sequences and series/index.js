// function getScore(n) {
//   let pattern = 50;
//   let score = 0;
//   for (let i = 1; i <= n; i++) {
//     score += pattern;
//     pattern += 50;
//   }
//   return score;
// }

const getScore = n => 25 * (n+1) * n;

console.log(getScore(5))
