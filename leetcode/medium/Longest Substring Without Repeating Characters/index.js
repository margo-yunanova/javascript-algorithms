/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    str = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (!str.includes(s[j])) {
        str += s[j];
      } else break;
    }
    max = Math.max(str.length, max);
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
