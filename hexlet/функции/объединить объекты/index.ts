const merge = (...dictionaries) => {
  const set = new Set(
    dictionaries.map((dictionary) => Object.keys(dictionary)).flat()
  );

  const mergeDictionary = {};

  for (const key of set) {
    mergeDictionary[key] = new Set();
    for (const dictionary of dictionaries) {
      if (Object.hasOwn(dictionary, key)) {
        mergeDictionary[key] = mergeDictionary[key].add(dictionary[key]);
      }
    }
    mergeDictionary[key] = Array.from(mergeDictionary[key]);
  }

  return mergeDictionary;
};

console.log(merge({ a: 1, b: 2, c: 3 }, { a: 3, b: 4 }, { a: 3, b: 2, d: 5 }));
