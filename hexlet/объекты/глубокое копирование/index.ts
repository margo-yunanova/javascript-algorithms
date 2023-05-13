const cloneDeep = (object: Record<string, any>): Record<string, any> => {
  const clonedObject = {};
  for (const key in object) {
    if (typeof object[key] !== "object") {
      clonedObject[key] = object[key];
    } else {
      clonedObject[key] = cloneDeep(object[key]);
    }
  }

  return clonedObject;
};

const data = {
  key: "value",
  key2: {
    key: "innerValue",
    innerKey: {
      anotherKey: "anotherValue",
    },
  },
};

const result = cloneDeep(data);
console.log(result);

console.log(result.key2 !== data.key2); // true
console.log(result.key2.innerKey !== data.key2.innerKey);
