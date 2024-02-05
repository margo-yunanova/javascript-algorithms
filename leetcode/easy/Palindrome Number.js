var isPalindrome = function(x) {
  const s = x.toString();
  for (let start = 0, end = s.length-1; start < s.length / 2; start++, end--) {
    if (s[start] !== s[end]) return false;
  }
  return true;
};
