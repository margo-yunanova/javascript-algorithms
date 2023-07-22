function inArray(a1: string[], a2: string[]): string[] {
  return a1
    .filter((substring) => a2.some((string) => string.includes(substring)))
    .sort();
}

const a1 = ["arp", "live", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
const a3 = ["tarp", "mice", "bull"];
const a4 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2));
console.log(inArray(a3, a4));
