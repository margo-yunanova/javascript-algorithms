var findMissing = function (list) {  
  const difference = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 0; i < list.length; i++) {
    if (list[i] + difference !== list[i + 1]) return list[i] + difference;
  }
}
