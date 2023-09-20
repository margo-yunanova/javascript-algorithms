function findRoutes(routes: string[][]): string {
  const rightRoute: string[] = [];
  const finish = routes.map((path) => path[1]);
  let current = routes.find(([start]) => !finish.includes(start))![0];

  for (let counter = routes.length; counter > 0; counter--) {
    const path = routes.find(([start]) => current === start)!;
    rightRoute.push(path[0]);
    current = path[1];
  }

  rightRoute.push(current);
  return rightRoute.join(", ");
}

// console.log(
//   findRoutes([
//     ["MNL", "TAG"],
//     ["CEB", "TAC"],
//     ["TAG", "CEB"],
//     ["TAC", "BOR"],
//   ])
// );

console.log(
  findRoutes([
    ["Chicago", "Winnipeg"],
    ["Halifax", "Montreal"],
    ["Montreal", "Toronto"],
    ["Toronto", "Chicago"],
    ["Winnipeg", "Seattle"],
  ])
);
