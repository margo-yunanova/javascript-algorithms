function topThreeWords(text) {
  const words = text.split(' ')
    .map(word => [...word]
      .filter(letter => "abcdefghijklmnopqrstuvwxyz'".includes(letter.toLowerCase())).join('').toLowerCase())
    .filter(word => word !== '' && word !== "'");
 
  const total = {};
  
  for (const word of words) {
    if (total.hasOwnProperty(word)) {
      total[word]++;
    } else {
      total[word] = 1;
    }
  }
  
  return Object.entries(total).sort((a, b) => b[1] - a[1]).slice(0,3).map(([word]) => word);
}
