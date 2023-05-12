const getDiff = (setFirst: Set<any>, setSecond: Set<any>): Set<any> => {
  const set = new Set(setFirst);
  setSecond.forEach((item) => set.delete(item));

  // for (const item of setFirst) {
  //   if (!setSecond.has(item)) {
  //     set.add(item);
  //   }
  // }
  // return new Set([...setFirst].filter((v) => !setSecond.has(v)));

  return set;
};

console.log(getDiff(new Set([2, 1]), new Set([2, 3])));
