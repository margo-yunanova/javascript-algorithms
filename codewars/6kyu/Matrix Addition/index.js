function matrixAddition(a, b){
  return a.map((mat, i) => mat.map((num, j) => num + b[i][j]));
}
