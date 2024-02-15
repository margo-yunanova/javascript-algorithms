var beeramid = function(bonus, price) {
  let money = bonus;
  let counter = 0;
  for (let i = 1; money > 0; i++) {
    money -= (i ** 2) * price;
    if (money >= 0) counter++;
  }
  
  return counter;
}
