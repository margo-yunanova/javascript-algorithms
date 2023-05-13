const getNewLists = <T>(list: Array<T>, getNewValue: (item: T) => string) =>
  Object.fromEntries(list.map((item) => [getNewValue(item), item]));

const cars = [
  { brand: "bmw", model: "m3", year: 2013 },
  { brand: "opel", model: "astra", year: 2014 },
  { brand: "hyundai", model: "accent", year: 2014 },
  { brand: "kia", model: "rio", year: 2013 },
  { brand: "kia", model: "sportage", year: 2015 },
];

console.log(getNewLists(cars, (car) => car.model));
