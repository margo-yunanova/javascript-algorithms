const findOutlier = (array) => {
  const newArray = array.map(item => Math.abs(item % 2))
  const sum = newArray.reduce((sum, item) => sum + item)
  return sum === 1 ? array[newArray.indexOf(1)] : array[newArray.indexOf(0)]
}

console.log(findOutlier([147427600,-109111986,-136524068,-139539996,19432522,183854550,-25939412,-142967903,90664670,-127142016,83516652,]));
