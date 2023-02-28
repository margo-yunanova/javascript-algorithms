const toCamelCase = (string) => string.split(/[-_]/gmi).map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');

console.log(toCamelCase("the_stealth_warrior"));
