const maxSequence = (arr) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-4, 28, -30, 46]));
console.log(maxSequence([42, -19, -44, -28, -12]));
