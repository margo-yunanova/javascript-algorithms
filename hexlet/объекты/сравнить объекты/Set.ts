type TObject = Record<string, string | number | boolean>;
type TObjectDiff = Record<
  string,
  "added" | "deleted" | "changed" | "unchanged"
>;

const compareObject = (objFirst: TObject, objSecond: TObject): TObjectDiff => {
  const set = new Set([...Object.keys(objFirst), ...Object.keys(objSecond)]);

  const mergedObject: TObjectDiff = {};

  for (const key of set) {
    if (objFirst[key] === undefined && objSecond[key] !== undefined) {
      mergedObject[key] = "added";
    } else if (objFirst[key] !== undefined && objSecond[key] === undefined) {
      mergedObject[key] = "deleted";
    } else if (objFirst[key] !== objSecond[key]) {
      mergedObject[key] = "changed";
    } else if (objFirst[key] === objSecond[key]) {
      mergedObject[key] = "unchanged";
    }
  }

  return mergedObject;
};

console.log(
  compareObject(
    { one: "eon", two: "two", four: true },
    { two: "own", zero: 4, four: true }
  )
);
