const cakes = (recipe, available) => {
 let min = Infinity;

 for (const ingred in recipe) {
  if (Object.hasOwn(available, ingred)) {
    min = Math.min(Math.floor(available[ingred]/recipe[ingred]), min)
  } else {
    min = 0;
  }
 }
 return min;
}

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
