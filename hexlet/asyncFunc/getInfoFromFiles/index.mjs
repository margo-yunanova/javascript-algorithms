import path from "path";
import fsp from "fs/promises";

const getStatsData = (filepath, mode) => ({ filepath, mode });
const sortStatsData = (a, b) => {
  if (a.filepath < b.filepath) return 1;
  else if (a.filepath > b.filepath) return -1;
  else return 0;
};

const ls = async (pathName) => {
  const pathStat = await fsp.stat(pathName);
  if (pathStat.isFile()) {
    return [getStatsData(path.resolve(pathName), pathStat.mode)];
  }

  const subPaths = await fsp.readdir(pathName);
  const result = await Promise.all(
    subPaths.map(async (filename) => {
      const filepath = path.join(pathName, filename);
      return getStatsData(
        path.resolve(filepath),
        (await fsp.stat(filepath)).mode
      );
    })
  );
  return result.sort(sortStatsData);
};

const main = async () => {
  console.log(await ls("yandex.practicum"));
  console.log(await ls("package-lock.json"));
};

main();
