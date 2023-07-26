function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let counter = 0;
  let currentBounce = h;
  while (currentBounce > window) {
    counter++;
    currentBounce *= bounce;
    if (currentBounce > window) counter++;
  }
  return counter;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(30, 0.75, 1.5));
console.log(bouncingBall(30, 0.4, 10));
